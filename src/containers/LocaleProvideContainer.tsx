import { IntlProvider } from 'react-intl'
import { connect } from 'react-redux'

import locales from '../locales'

const mapStateToProps = (state: RootState) => ({
  locale: state.app.locale,
  messages: locales[state.app.locale],
})

export default connect(
  mapStateToProps,
)(IntlProvider)
