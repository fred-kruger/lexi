import React, { Component } from 'react';
import { connect } from 'react-redux';

class MainNavContainer extends Component {
    buidMainNav(categories){
        return categories.map((category, index) =>
             <div key={index}>Category</div>
        );
    }

    render() {
        const categories = this.props.categories; 

        return (
            <div>
                {this.buidMainNav(categories)} 
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
    mapStateToProps
)(MainNavContainer);