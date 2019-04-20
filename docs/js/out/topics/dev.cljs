(ns ^:figwheel-no-load topics.dev
  (:require
    [topics.core :as core]
    [devtools.core :as devtools]))


(enable-console-print!)

(devtools/install!)

(core/init!)
