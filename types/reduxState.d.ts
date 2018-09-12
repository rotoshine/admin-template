interface RootState {
  app: AppState
}

interface AppState {
  ready: boolean,
  locale: string,
}
