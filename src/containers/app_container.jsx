import { connect } from 'react-redux';

import App from '../components/app';

const mapStateToProps = (state) => {
  return {
    ...state.ui,
  };
}

export default connect(
  mapStateToProps,
)(App);
