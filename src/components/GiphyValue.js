import React, {Component} from 'react';

class GiphyValue extends Component {

    state ={
        close_open: false
    }

    openModal = () => {
        this.setState({close_open:true})
    }

    closeModal = () => {
        this.setState({close_open:false})
    }

    render() {
        return (
            <div className='item'>
                <img src={this.props.images.original.url}  width='200' height='200' alt='' onClick={this.openModal}/>
   
                <div id="myModal" className={'modal' + ' ' + (this.state.close_open ? 'block':'none')}>
                    <div className="modal-content">
                        <span className="close" onClick={this.closeModal}>&times;</span>
                        <h2>{this.props.title}</h2>
                        <p>Url: {this.props.url}</p>
                        <p>Content-reating: {this.props.rating}</p>
                        <p>Import-datetime: {this.props.import_datetime}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default GiphyValue;