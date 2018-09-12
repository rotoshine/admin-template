import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import ko from 'react-intl/locale-data/ko'

import { configureStore, runEpicMiddleware } from './store/configureStore'
import LocaleProvideContainer from './containers/LocaleProvideContainer'

import App from './App'

import './index.less'

addLocaleData([...ko, ...en])

const initialState = {
  app: {},
}

const store = configureStore(initialState)

runEpicMiddleware()

ReactDOM.render(
  (
    <Provider store={store}>
      <LocaleProvideContainer>
        <Router>
          <App />
        </Router>
      </LocaleProvideContainer>
    </Provider>
  ),
  document.getElementById('root') as HTMLElement,
)
