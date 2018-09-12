import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootEpics from '../epics'
import reducers from '../reducers'

import { setLocale } from '../actions/i18n'

const composer: <T>(a: T) => T = process.env.NODE_ENV === 'production' ? compose : composeWithDevTools

const epicMiddleware = createEpicMiddleware()
const middlewares = [
  epicMiddleware,
]

const enhancer = composer(
  applyMiddleware(...middlewares),
)

export const configureStore = (initialState = {}) => {
  const store = createStore(
    reducers,
    initialState,
    enhancer)

  store.dispatch(setLocale(process.env.LOCALE || 'ko'))
  return store
}

export const runEpicMiddleware = () => epicMiddleware.run(rootEpics)
