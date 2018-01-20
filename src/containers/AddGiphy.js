import React, {Component} from 'react';
import {connect} from 'react-redux'
import {addGiphyData} from '../actions/actionCreators'

class AddGiphy extends Component {

    state = {
        searchValue: ''
    };

    handleChange = (e) => {
        e.preventDefault();
        this.setState({searchValue:e.target.value})
    }

    render(){
        return(
            <div className='search-form'>
                <input className="input"
                       type="text"
                       placeholder="Enter search gif"
                       onChange={this.handleChange}
                       value={this.state.value}
                />
                <button className='button' onClick={()=> {
                    return (
                        this.props.addGiphyData(this.state.searchValue),
                            this.setState({searchValue: 'sss'})
                    )
                }}>
                    GO!)
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        giphy: state
    };
};


export default connect(mapStateToProps, {addGiphyData})(AddGiphy)