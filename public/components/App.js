import React from 'react';
import { connect } from 'react-redux';
import NavBar from './Navbar';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     localeList : state.localeList,
//     propertyName: state.propertyName,
//   }
// }
export default App;
