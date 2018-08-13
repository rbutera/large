import ReactDOM from "react-dom"
import React from "react"
import { createStore } from "redux"
import App from "./App.js"
import { Provider } from "react-redux"

const defaultState = { appName: "LARGE", articles: null }

const reducer = function(state = defaultState, action) {
  return state
}
const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
