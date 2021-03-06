import { connect } from 'react-redux';
import PostList from './PostList';

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(PostList);