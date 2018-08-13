function isPromise(v) {
  return v && typeof v.then === "function"
}

const promiseMiddleware = store => next => action => {
  if (isPromise(action.payload)) {
    console.log("promiseMiddleware - promise detected")
    action.payload.then(
      res => {
        console.log("promiseMiddleware - extracting payload")
        action.payload = res
        store.dispatch(action)
      },
      error => {
        console.error("promiseMiddleware - error extracting payload")
        action.error = true
        action.payload = error.response.body
        store.dispatch(action)
      }
    )
    return
  } else {
    console.log("promiseMiddleware - not a promise")
  }
  next(action)
}

export { promiseMiddleware }
