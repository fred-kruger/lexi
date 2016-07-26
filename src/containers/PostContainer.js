import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostDetail from '../components/PostDetail';

import Post from '../components/Post';

class PostContainer extends Component {

    render() {
        const posts = this.props.posts;
        const postId = this.props.routeParams.postId;

        console.log(posts);
        console.log(postId);

        var index = getIndex(postId, posts, 'id');
        var post = { 'postId': postId };

        if (index !== -1) {
            console.log('find' + index);

            post = posts[index];
        }
        else {
            console.log('not found');
        }

        console.log(post);

        return (
            <div>
                <PostDetail />
            </div>
        );
    }
}

function getIndex(value, arr, prop) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i][prop] == value) {
            return i;
        }

        return -1;
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts.posts
    }
}

export default connect(mapStateToProps)(PostContainer);