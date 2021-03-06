import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as appActions from '../../actions/app'
import Header from '../../components/Header/index';
import UserInfo from '../../components/UserInfo/index';
import OrderList from './subpage/OrderList';


class User extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    const userinfo = this.props.userinfo;
    return (
        <div>
          <Header
              title="用户中心"
              backRouter="/"
              history={this.props.history}
          />
          <UserInfo
              username={userinfo.username}
              cityName={userinfo.cityName}
          />
          <OrderList username={userinfo.username}/>
        </div>
    )
  }

  componentDidMount() {
    // If you are not logged in, return to the login page
    if (!this.props.userinfo.username) {
      this.props.history.push('/login');
    }
  }
}

// Redux.
function mapStateToProps(state) {
  return {
    userinfo: state.userinfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    appActionList: bindActionCreators(appActions, dispatch)
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User)