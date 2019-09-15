import { connect } from 'react-redux';

import { setHeader } from '../actions/ui_actions';
import Projects from '../components/projects/projects';

const mapStateToProps = (state) => {
  return {
    navbarLarge: state.ui.navbarLarge,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    _setHeader: (header) => dispatch(setHeader(header)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Projects);
