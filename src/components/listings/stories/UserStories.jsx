import React, { Component } from "react";
import { Pagination, Transition, Input, Message } from "semantic-ui-react";

import { connect } from "react-redux";
import { getUserStories } from "../../../redux/actions/StoriesAction";
// components
import StoryContainer from "../../common/container/StoryContainer";
import StoryPlaceHolder from "../../common/placeholder/StoryPlaceHolder";
import SimpleSearch from "../../common/search/SimpleSearch";

//css
import Styles from "./Stories.module.css";

class UserStories extends Component {
  state = {
    stories: [],
    totalStories: 0,

    totalPage: 1,
    pageSize: 5,
    query: "",
    activePage: 1,

    loading: true
  };

  requestStories = (skip, top) => {
    this.setState({ loading: true });
    const { userId } = this.props.user;
    if (!!userId == true)
      this.props
        .getUserStories(userId, skip, top)
        .then(res => this.setState({ loading: false }))
        .catch(err => this.setState({ loading: false }));
  };

  requestStoriesQuery = (skip, top, query) => {
    const { userId } = this.props.user;
    if (!!userId == true)
      this.props
        .getUserStories(userId, skip, top, query)
        .then(res => this.setState({ loading: false }))
        .catch(err => this.setState({ loading: false }));
  };

  componentDidMount = () => {
    const { pageSize } = this.state;
    this.requestStories(0, pageSize);
  };

  componentWillReceiveProps = nextProps => {
    const { stories, total } = nextProps.storiesObject;
    if (!!stories === true && stories !== this.state.stories) {
      this.setState({ stories, totalStories: total });
      this.handlePageCount(total);
    }
  };

  handlePageCount = totalStories => {
    const { pageSize } = this.state;
    let totalPage = Math.ceil(totalStories / pageSize);
    this.setState({ totalPage });
  };

  onPageChange = (e, { activePage }) => {
    let prevPage = activePage - 1;
    const { pageSize, query } = this.state;

    this.setState({ loading: true });
    if (!!query == true)
      this.requestStoriesQuery(prevPage * pageSize, pageSize, query);
    else this.requestStories(prevPage * pageSize, pageSize);
  };

  onSearchChange = event => {
    let value = event.target.value;
    value = value.trim();

    this.setState({ query: value, loading: true });
    const { pageSize } = this.state;

    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.setState({ isLoading: true });
      this.requestStoriesQuery(0, pageSize, value);
    }, 1000);
  };

  onPageSizeChange = event => {
    const pageSize = parseInt(event.target.value) | 0;
    if (pageSize < 2) return;

    clearTimeout(this.timer);
    const { query, activePage } = this.state;
    const prevPage = activePage - 1;

    this.setState({ pageSize });

    this.timer = setTimeout(() => {
      if (!!query == true)
        this.requestStoriesQuery(prevPage * pageSize, pageSize, query);
      else this.requestStories(prevPage * pageSize, pageSize);
    }, 1000);
  };

  getView = () => {
    const { stories, loading, query } = this.state;
    if (loading) return <StoryPlaceHolder number={3} />;

    const length = stories.length;

    if (!!length)
      return (
        <React.Fragment>
          <Transition
            visible={!!query && !loading}
            animation="fade"
            duration={800}
          >
            <Message color="black" list={[`${length} Stories Found`]} />
          </Transition>
          {stories.map((story, index) => (
            <StoryContainer key={index} readMore={true} story={story} />
          ))}
        </React.Fragment>
      );

    return (
      <Transition visible={true} animation="fade" duration={800}>
        <Message negative list={["No Stories Found"]} />
      </Transition>
    );
  };

  render() {
    const { totalPage, pageSize } = this.state;

    return (
      <div>
        <SimpleSearch onChange={this.onSearchChange} />
        <div className={Styles.StoriesContainer}>{this.getView()}</div>
        <Input
          icon
          type="number"
          size="mini"
          value={pageSize}
          onChange={this.onPageSizeChange}
          placeholder="page size"
        ></Input>
        <Pagination
          inverted
          defaultActivePage={1}
          firstItem={null}
          lastItem={null}
          pointing
          secondary
          totalPages={totalPage}
          onPageChange={this.onPageChange}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  storiesObject: state.Stories,
  user: state.User
});

export default connect(mapStateToProps, { getUserStories })(UserStories);
