import React, { Component } from 'react';
import { Link } from 'react-router';

export default class MainNavigation extends Component {
    render() {
        const { category } = this.props;

        return (
            <Link to={`/category/${category.slug}`} className="nav-link" activeClassName="active">{category.name}</Link>
        );
    }
}