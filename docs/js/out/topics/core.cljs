(ns topics.core
  (:require
   [reagent.core :as r]
   [ajax.core :refer [GET]]
   [garden.core :as garden]
   ))

(garden/css [:content {:display 'flex
                       :flex-direction 'column
                       :justify-content 'center
                       :align-items 'center}
             :title  {}
             :topics {}
             :next-button {}])

(def state (r/atom {:topics []
                    :fetch? false
                    :index -1
                    }))

(defn random-range [min max]
  (+ (Math/ceil (rand (- max min)) (- min 1))))

(defn random-index []
  (swap! state assoc :index
         (random-range 0 (count (:topics @state)))))

(defn success-handler [response]
  (let [data (clj->js response)]
    (swap! state assoc :topics data.topics)
    (swap! state assoc :fetch? true)
    (random-index)
    ))

(defn error-handler [response]
  (.log js/console (str "error: " response)))

(defn request-json[]
  (GET "/topics.json" {:handler  success-handler
                       :error-handler error-handler
                       }))

(defn home-page []
  [:div.content
   [:h2.title "あなたに最高の質問を差し上げましょう... "]
   [:div.topics
    (if (and (:fetch? @state) (not (= -1 (:index @state))))
      (nth (:topics @state) (:index @state)))
    ]
   [:input.next-button {:type "button"
                        :value "Next!"
                        :on-click random-index
                        }]])

(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root)
  (request-json)
  )
