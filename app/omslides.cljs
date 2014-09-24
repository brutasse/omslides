(ns omslides
  (:require [om.core :as om :include-macros true]
            [om.dom :as d]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom :include-macros true]
            [clojure.string :refer [trim split join]]
            [ajax.core :refer [GET]]))

(enable-console-print!)

(defn state-from-event
  [app k]
  (let [f (fn [app k e]
            (om/transact! app k #(-> e .-target .-value)))]
    (partial f app k)))

(defn get-hash-words []
  (split (subs js/window.location.hash 1) ","))

(defn text-from-hash []
  (join "\n" (get-hash-words)))

(defn text-to-hash [text]
  (->> (split text "\n")
       (map trim)
       (filter not-empty)
       (join ",")))

(defn update-hash [app e]
  (.preventDefault e)
  (set! js/document.location.hash (text-to-hash (:text @app))))

(def app-state (atom {:text (text-from-hash)
                      :counter nil}))

(def giphy {:url "//api.giphy.com/v1/gifs/random"
            :key "dc6zaTOxFJmzC"})

(defn get-images [app [tag & tags]]
    (om/transact! app :counter inc)
    (GET (:url giphy) {:params {:api_key (:key giphy)
                                :tag tag}
                       :headers {:content-type "application/json"
                                 :accept "application/json"}
                       :format :json
                       :handler (fn [res]
                                  (let [img (get-in res ["data" "image_original_url"])]
                                    (om/transact! app :slides (fn [slides] (conj slides {:text tag :src img}))))
                                  (if (empty? tags)
                                    (do
                                      (om/update! app :counter nil)
                                      (js/Reveal.initialize))
                                    (get-images app tags)))
                       :error-handler (fn [{:keys [status-text]}]
                                        (js/console.log status-text))}))

(defn generate-slides [app]
  (let [words (get-hash-words)]
    (om/update! app :counter 0)
    (om/update! app :total (count words))
    (om/update! app :slides [])
    (get-images app words)))

(defn hash-changed [app e]
  (js/Reveal.navigateTo 0)
  (om/update! app :text (text-from-hash))
  (generate-slides app))

(defcomponent loader [{:keys [counter total]} owner]
  (render [_]
    (if (nil? counter)
      (dom/p nil
        (dom/span {:class "ok"} "√")
        (dom/span nil "Your slideshow is ready. Press the right arrow key and speak up. Press ESC to get an overview."))
      (dom/p nil
        (str "GIFing slide " counter " / " total)))))

(defcomponent form [app owner]
  (render [_]
    (dom/section nil
      (dom/h1 nil (dom/a {:href "./#"} "Omslides"))
      (dom/p nil
        (dom/span nil "Enter one term per line and generate a fancy slideshow. ")
        (dom/a {:href "#correct,horse,battery,staple"} "Example"))
      (dom/form {:on-submit (partial update-hash app)}
        (dom/label nil (dom/textarea {:on-change (state-from-event app [:text])
                                      :value (:text app)}))
        (dom/p nil (dom/button nil "Let me ridicule myself")))
      (om/build loader app))))

(defcomponent slide [slide owner]
  (render [_]
    (dom/section nil
      (dom/h1 nil (:text slide))
      (dom/img {:src (:src slide)} nil))))

(defcomponent slideshow [app owner]
  (did-mount [_]
    (js/Reveal.initialize)
    (generate-slides app))

  (will-mount [_]
    (js/window.addEventListener "hashchange" (partial hash-changed app)))

  (render [_]
    (dom/div nil
      (dom/div {:class "reveal"}
        (dom/div {:class "slides"}
          (om/build form app)
          (om/build-all slide (:slides app)))))))

(om/root slideshow app-state
  {:target (. js/document (getElementById "main"))})
