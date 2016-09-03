import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

class DocumentDrop extends Component {
  onDrop(files) {
    console.log('recevied files: ', files);
  }

  render() {
    return (
      <div className=".documentDrop">
        <Dropzone onDrop={this.onDrop}>
          <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>
      </div>
    );

  };
};

export default DocumentDrop;
