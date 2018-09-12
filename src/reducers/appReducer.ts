import {
  SET_LOCALE,
} from '../actions/i18n'

const initialState = {
  ready: false,
  locale: '',
}

const appReducer = (state: AppState = initialState, action: ReduxAction) => {
  switch (action.type) {
    case SET_LOCALE:
      return {
        ...state,
        locale: action.payload.locale,
      }
    default:
      return state
  }
}

export default appReducer
