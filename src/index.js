import ReactDOM from "react-dom"
import React from "react"
import App from "./App.js"
import { Provider } from "react-redux"
import store from "./store"
import { HashRouter } from "react-router-dom"

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById("root")
)
