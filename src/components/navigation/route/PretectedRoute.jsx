import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

//redux
import { connect } from "react-redux";
import { updateNavigation } from "../../../redux/actions/GlobalAction";

class PretectedRoute extends Component {
  getView = props => {
    const { user, component: Component } = this.props;

    if (!!user.userId) return <Component {...props} />;
    else {
      this.props.updateNavigation(3);
      return <Redirect to="/login" />;
    }
  };

  render() {
    const { component: Component, user, ...rest } = this.props;

    return <Route {...rest} render={this.getView} />;
  }
}

const mapStateToProps = state => ({
  user: state.User
});
export default connect(mapStateToProps, { updateNavigation })(PretectedRoute);
