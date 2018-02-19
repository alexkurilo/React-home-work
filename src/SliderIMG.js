import React, { Component } from 'react';

class SliderIMG extends Component {


    render() {

        return (
            <div>
                <img src={this.props.imgfunc[this.state.eventCounter].url}
                     style = {this.styles.imgStyles}
                     alt=""/>
            </div>
        );
    }
}

export default SliderIMG;