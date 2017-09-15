import { connect } from 'react-redux';
import Loader from '../components/Loader/Loader';

function mapStateToProps(state) {
  return { loading: state };
}
export default connect(mapStateToProps)(Loader);
