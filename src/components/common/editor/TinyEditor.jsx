import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import PageLoader from '../../common/loader/PageLoader'

//css
import Styles from './TinyEditor.module.css'

class TinyEditor extends React.Component {

  state={
    loading:true
  }

    handleEditorChange = (content, editor) => {
      this.props.onContentChange(content)
  }


  render() {
    const {content}=this.props
    const { loading}=this.state
    
    return (
      <div className={Styles.myEditor}>
          <PageLoader loader={loading}/>
          <Editor
            onNodeChange={()=>this.setState({loading:false})}
            initialValue="<p>This is the initial content of the editor</p>"
           
            init={{
              height: 500,
              menubar: false,
                 
              plugins: [
                'preview',
                'insertdatetime paste wordcount'
              ],
              toolbar:
                'undo redo | formatselect | bold italic backcolor preview | \
                 bullist outdent indent '
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