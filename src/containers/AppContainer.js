import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addPlace } from '../actions';
import App from '../components/App/App';

function mapStateToProps(state) {
  return { places: state };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addPlace }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
