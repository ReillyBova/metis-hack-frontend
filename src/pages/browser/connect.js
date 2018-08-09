import { connect } from 'react-redux'
import { addService } from 'actions'
import { default as BrowserPage } from './browser-page'


function mapStateToProps(state, props) {
  return {
    services: (state.inactive)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addService: (key) => dispatch(addService(key))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BrowserPage)
