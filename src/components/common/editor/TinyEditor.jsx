import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

class TinyEditor extends React.Component {

    handleEditorChange = (content, editor) => {
      this.props.onContentChange(content)
  }

  render() {
    return (
      <Editor
        initialValue="<p>This is the initial content of the editor</p>"
        init={{
          skin: "oxide-dark",
          content_css: "dark",

          height: 500,
          menubar: false,
          plugins: [
            'advlist lists link image preview anchor',
            'visualblocks fullscreen',
            'insertdatetime media table paste wordcount'
          ],
          toolbar:
            'undo redo | formatselect | bold italic backcolor preview | alignleft | \
            bullist indent'
        }}
        onEditorChange={this.handleEditorChange}
      />
    );
  }
}

export default TinyEditor;