import React from 'react';
// import Container from './/_container';

class HomePage extends React.Component {

  constructor(props) {
    super(props);
  }

  handleClick() {
    this.props.logout();
  }

  render() {
    return(
      <div className="HomePage">
        <h1>Welcome To the HomePage</h1>
        <button onClick={this.handleClick.bind(this)}>Sign Out</button>
      </div>
    )
  }
}

export default HomePage;