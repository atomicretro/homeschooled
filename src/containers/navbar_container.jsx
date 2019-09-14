import { connect } from 'react-redux';

import { embiggenNavbar, diminishNavbar } from '../actions/ui_actions';
import Navbar from '../components/navbar/navbar';

const mapStateToProps = (state) => {
  return {
    navbarLarge: state.ui.navbarLarge,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    _embiggenNavbar: () => dispatch(embiggenNavbar()),
    _diminishNavbar: () => dispatch(diminishNavbar()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);
