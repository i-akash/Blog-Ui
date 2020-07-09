import React, { Component } from "react";

import Header from "../../common/header/Header";
import Button from "../../common/buttons/Button";
import TinyEditor from "../../common/editor/TinyEditor";
import { Form, Message, Transition } from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";
import pureHtml from "../../../pureIt/PureHtml";

import { formatDate } from "../../common/date/DateFormate";

//redux
import { connect } from "react-redux";
import { updateNavigation } from "../../../redux/actions/GlobalAction";

// import SemanticDatepicker from 'react-semantic-ui-datepickers';
// import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';

//css
import Styles from "./StoryForm.module.css";

import Alert from "../../common/alert/Alert";

import { withRouter } from "react-router-dom";

class StoryForm extends Component {
  state = {
    title: "",
    editorContent: "",
    date: new Date(),

    success: false,
    formError: {}
  };

  componentWillReceiveProps = nextProps => {
    const { story } = nextProps;
    if (!!story === true && story !== this.props.story)
      this.setState({
        title: story.title,
        editorContent: story.body,
        date: story.publishedDate
      });
  };

  onFieldChange = event => {
    this.setState({ [event.target.name]: event.target.value, formError: {} });
  };

  onContentChange = editorContent =>
    this.setState({ editorContent, formError: {} });

  onDateChange = (event, { name, value }) => {
    console.log(value);

    this.setState({ [name]: value, formError: {} });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({ loading: true });

    let { title, editorContent, date } = this.state;
    editorContent = pureHtml(editorContent);
    this.props
      .onSubmitStory({ title, body: editorContent, publishedDate: date })
      .then(res => this.setState({ loading: false, success: true }))
      .catch(err =>
        this.setState({ loading: false, formError: err.response.data.errors })
      );
  };

  onRoute = (path, name) => {
    this.props.updateNavigation(name);
    this.props.history.push(path);
  };

  render() {
    const { header, btnText } = this.props;
    const {
      date,
      title,
      editorContent,
      loading,
      success,
      formError
    } = this.state;

    return (
      <div className={Styles.formContainer}>
        <Form loading={loading} onSubmit={this.onSubmit}>
          <Header header={header} />

          <Alert
            header={`${header} Confirmation`}
            text={`${header} Success`}
            btn1="Home"
            click1={() => this.onRoute("/", 0)}
            btn2="Continue"
            click2={() => this.setState({ success: !success })}
            open={success}
          />

          <Transition
            visible={!!formError.message}
            animation="fade"
            duration={800}
          >
            <Message negative header="Error" list={[formError.message]} />
          </Transition>
          <Form.Field>
            <Form.Input
              required
              name="title"
              value={title}
              onChange={this.onFieldChange}
              placeholder="Title"
              error={
                !!formError.Title && {
                  content: formError.Title[0],
                  pointing: "below"
                }
              }
            />
          </Form.Field>
          {formError.Body && (
            <Message negative header="Error" list={formError.Body} />
          )}
          <TinyEditor
            onContentChange={this.onContentChange}
            content={editorContent}
          />
          <DateInput
            animation="zoom"
            duration={0}
            name="date"
            placeholder="Date"
            value={formatDate(date)}
            iconPosition="left"
            onChange={this.onDateChange}
            dateFormat="YYYY-MM-DD"
            error={
              !!formError.PublishedDate && {
                content: formError.PublishedDate[0],
                pointing: "below"
              }
            }
          />
          <Button text={btnText} />
        </Form>
      </div>
    );
  }
}

export default connect(null, { updateNavigation })(withRouter(StoryForm));
