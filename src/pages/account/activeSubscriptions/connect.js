import { connect } from 'react-redux'
import { removeService } from 'actions'
import { default as ActiveSubscriptions } from './active-subscriptions'


function mapStateToProps(state, props) {
  return {
      services: (state.active)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    removeService: (key) => dispatch(removeService(key))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActiveSubscriptions)
