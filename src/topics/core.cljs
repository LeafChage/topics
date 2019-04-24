(ns topics.core
  (:require
    [reagent.core :as r]
    [ajax.core :as ajax]))

(def state (r/atom {:topics []
                    :fetch? false
                    :index -1
                    }))

(defn random-range [min max]
  (+ (Math/floor (rand (- max min)) (- min 1))))

(defn random-index []
  (swap! state assoc :index
         (random-range 0 (count (:topics @state)))))

(defn success-handler [[ok response]]
  (if ok
    (let [data (js->clj response :keywordize-keys true)]
      (.log js/console data)
      (swap! state assoc :topics (:topics data))
      (swap! state assoc :fetch? true)
      (random-index))
    (.log js/console (str "error: " response))))

(defn request-json []
  (ajax/ajax-request
    {:uri "./topics.json"
     :method :get
     :handler success-handler
     :format (ajax/url-request-format)
     :response-format (ajax/json-response-format {:keywords? true})})
  )

(defn home-page []
  [:div.content
   [:h3.title "あなたに最高の質問を差し上げましょう... "]
   [:div.topics
    (if (and (:fetch? @state)
             (not (= -1 (:index @state))))
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
  (request-json))
