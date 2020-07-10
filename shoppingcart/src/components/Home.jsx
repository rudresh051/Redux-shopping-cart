import React, { Component } from 'react';
import {connect} from 'react-redux';
import SingleItem from './SingleItem';

class Home extends Component {
    render() {
        const {data}=this.props
        return (
            <div className="container">
               <SingleItem data={data}/>
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return {
        data:state.data
    }
}

export default connect(mapStateToProps,null)(Home)