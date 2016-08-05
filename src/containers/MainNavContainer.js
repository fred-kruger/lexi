import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/categoryActions';
import MainNavigation from '../components/MainNavigation';

class MainNavContainer extends Component {

    componentWillMount() {
        console.log('component mount');
        this.props.fetchCategories();
    }

    buidMainNav(categories) {
        return categories.map((category, index) =>
            <MainNavigation category={category} key={category.id} />
        );
    }

    render() {
        const categories = this.props.categories;

        return (
            <div className="blog-masthead">
                <div className="container">
                    <nav className="nav blog-nav">
                        {this.buidMainNav(categories) }
                    </nav>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        categories: state.categories.categories
    };
}

export default connect(
    mapStateToProps,
    { fetchCategories }
)(MainNavContainer);