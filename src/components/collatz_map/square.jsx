import React from 'react';

class Square extends React.PureComponent {
  render() {
    return <div className={ this.props.name } key={ this.props.key } />;
  }
}

export default Square;
