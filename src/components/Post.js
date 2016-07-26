import React, { Component } from 'react';
import { Link } from 'react-router';

// Dumb component
export default class Post extends Component {
    createMarkup(html) {
        return {
            __html: html
        };
    }

    render() {
        const { post } = this.props;

        return (
            <div className="blog-post">
                <h2 className="blog-post-title"><Link to={`post/${post.id}`} >{post.title.rendered}</Link></h2>
                <p className="blog-post-meta">{post.date} <a href="#">Mark</a></p>

                <div dangerouslySetInnerHTML={this.createMarkup(post.excerpt.rendered)} />

            </div>
        );
    }
}