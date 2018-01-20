import React, {Component} from 'react';
import {connect} from 'react-redux';
import GiphyValue from './../components/GiphyValue';



class GiphyList extends Component {
    render() {
        return (
            <div className='giphy-wrapper'>
                {this.props.giphy.map(gif =>
                    <GiphyValue
                        key={gif.id}
                        {...gif}
                    />
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        giphy: state.data
    };
};

export default connect(mapStateToProps,null)(GiphyList)