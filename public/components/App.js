import React from 'react';
import { connect } from 'react-redux';
import NavBar from './Navbar';
import BookSection from './BookSection.js'

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <BookSection />
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
