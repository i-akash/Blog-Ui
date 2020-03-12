import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

//css
import Styles from './TinyEditor.module.css'

class TinyEditor extends React.Component {

    handleEditorChange = (content, editor) => {
      this.props.onContentChange(content)
  }

  render() {
    const {content}=this.props
    return (
      <div className={Styles.myEditor}>
          <Editor
            initialValue="<p>This is the initial content of the editor</p>"
            init={{
              height: 500,
              menubar: false,
            }}
            onEditorChange={this.handleEditorChange}
            value={content}
            apiKey="s9b77i3uqjvhptid9ewefb97ofylv35gio3z13c9zzqc81dj"
          />
      </div>
    );
  }
}

export default TinyEditor;