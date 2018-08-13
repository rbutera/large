import { createStore, applyMiddleware } from "redux"
import { promiseMiddleware } from "./middleware"
const defaultState = { appName: "LARGE", articles: null }

const reducer = function(state = defaultState, action) {
  switch (action.type) {
    case "HOME_PAGE_LOADED":
      return { ...state, articles: action.payload.articles }
  }
  return state
}
const store = createStore(reducer, applyMiddleware(promiseMiddleware))

export default store
