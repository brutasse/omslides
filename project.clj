(defproject omslides "1.0"
  :plugins [[lein-cljsbuild  "1.0.4-SNAPSHOT"]
            [lein-marginalia "0.7.1"]]
  :cljsbuild {
    :builds [{:id "app"
              :source-paths ["src"]
              :compiler {
                :output-to "resources/public/app.js"
                :output-dir "resources/public/app"
                :optimizations :none
                :source-map true}}]}
  :dependencies [[org.clojure/clojure       "1.6.0"]
                 [org.clojure/clojurescript "0.0-2342"]
                 [om                        "0.7.1"]
                 [prismatic/om-tools        "0.3.2"]
                 [cljs-ajax                 "0.2.6"]])
