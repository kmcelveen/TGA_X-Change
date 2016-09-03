import React from 'react';
import { connect } from 'react-redux';
import NavBar from './components/Navbar';
import BookSection from './components/BookSection.js';
import DocumentDrop from './components/DocumentDrop';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <DocumentDrop />
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
