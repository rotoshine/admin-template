export const SET_LOCALE = '@i18n/SET_LOCALE'

export const setLocale = (locale: string): ReduxAction => ({
  type: SET_LOCALE,
  payload: {
    locale,
  },
})
