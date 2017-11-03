import React, { Component } from 'react';
import Post from './Post';

class PostList extends Component {
    constructor(props) {
        super(props);
        this.renderPosts = this.renderPosts.bind(this);
    }

    renderPosts() {
        const { posts } = this.props;
        
        const postDivs = posts.map((post, index) => {
            return <Post key={index} post={post}/> 
        });
        return postDivs;
    }

    render() {
        return (
            <div>
                {this.renderPosts()}
            </div>    
        );
    }
}

PostList.displayName = 'PostList';

export default PostList;
