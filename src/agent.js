import _superagent from "superagent"
import superagentPromise from "superagent-promise"

const superagent = superagentPromise(_superagent, global.Promise)

const API_ROOT = "https://conduit.productionready.io/api"

const responseBody = res => res.body

const requests = {
  get: url => {
    console.log(`retrieving ${API_ROOT}${url}`)
    return superagent.get(`${API_ROOT}${url}`).then(responseBody)
  }
}

const Articles = {
  all: page => requests.get(`/articles?limit=10`)
}

export default { Articles }
