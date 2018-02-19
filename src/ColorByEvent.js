import React, { Component } from 'react';

let styles= {

    buttonStyleRed: {
        backgroundColor: "red",
        fontWeight: 'bold',
        fontSize: '18px',
        borderRadius: '8px',
        width: '100px',
        height: '40px',
    },
    buttonStyleBlue: {
        backgroundColor: "blue",
        fontWeight: 'bold',
        fontSize: '18px',
        borderRadius: '8px',
        width: '100px',
        height: '40px',
    },
    buttonStyleReset: {
        backgroundColor: "black",
        color: 'white',
        fontWeight: 'bold',
        fontSize: '18px',
        borderRadius: '8px',
        width: '100px',
        height: '40px',
    }
}

class ColorByEvent extends Component {
    constructor (props) {
        super(props);
        this.state = { textColor: 'black'};
    }

    colorChangeRed(){
        this.setState({textColor: 'red'});
    }
    colorChangeBlue(){
        this.setState({textColor: 'blue'});
    }
    colorChangeReset(){
        this.setState({textColor: 'black'});
    }
    render () {
        let textStyles = {
            color: this.state.textColor,
            fontSize: '30px',
            textAlign: 'center'
        };

        return (
            <div id='colorByEvent'>
                <div  style={textStyles}>
                    Some text ... color is {this.state.textColor}
                </div>
                <div id='buttonsWrap'>
                    <button className='buttonColorChange'
                            onClick={this.colorChangeRed.bind(this)}
                            style = {styles.buttonStyleRed}>
                        Red
                    </button>
                    <button className='buttonColorChange'
                            onClick={this.colorChangeBlue.bind(this)}
                            style = {styles.buttonStyleBlue}>
                        Blue
                    </button>
                    <button className='buttonColorChange'
                            onClick={this.colorChangeReset.bind(this)}
                            style = {styles.buttonStyleReset}>
                        Reset
                    </button>
                </div>

            </div>
        );
    }
}

export default ColorByEvent;