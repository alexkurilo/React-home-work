import React, { Component } from 'react';
/*import SliderIMG from "./SliderIMG";*/

let styles= {
    buttonsStyles: {
        height: '30px',
        width: '100px',
        backgroundColor: '#98FB98',
        color: '#6B8E23',
        fontSize: '20px',
        fontWeight: 'bold',
        verticalAlign: 'middle',
        borderRadius: '15px',
    },
    textStyles: {
        fontSize: '30px',
        width: '350px',
    },
    imgStyles: {
        width: '90%',
    }
}

class EventAndNumber extends Component {
    constructor (props) {
        super(props);
        this.state = {
            eventCounter: 0,
            image: 'http://www.o-prirode.com/_ph/48/330682859.jpg',
            defaultImg: 'img/default.png'
        }
    }
    /*shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate() - обновление либо state либо props");
        return true;
    }*/
    /*componentWillUpdate(nextProps, nextState){
        this.loadImage(this.props.imgfunc[this.state.eventCounter].url, this.state.defaultImg)
            .then(()=>
            {
                this.setState({image: this.props.imgfunc[this.state.eventCounter].url});
                console.log(this.state.image);

            })
            .catch(()=>{
                this.setState({image: this.state.defaultImg});
                console.log(this.state.image);
            });
    }*/
    loadImage (url, defaultImg){
        return new Promise(function(resolve, reject){
            let img = new Image();
            img.onload = function(){
                console.log(url);
                return resolve (url);
            }
            img.onerror = function(){
                url = defaultImg;
                console.log(url);
                return reject (url);
            }

            img.src = url;
            console.log(img.src);
        });
    }

    eventCounterPlus(){
       if (this.state.eventCounter === this.props.imgfunc.length-1){
           this.setState({eventCounter: 0});
       }  else{
           this.setState({eventCounter: ++this.state.eventCounter});
       }

    }

    eventCounterMinus(){
        if (this.state.eventCounter === 0){
            this.setState({eventCounter: this.props.imgfunc.length-1});
        }else{
            this.setState({eventCounter: --this.state.eventCounter});
        }
             /*console.log('minus', this.state.eventCounter);
            console.log(this.props);*/
    }

    render () {

        return (
            <div id='eventAndNumber'>
                <button onClick={this.eventCounterMinus.bind(this)}
                        style = {styles.buttonsStyles} >
                   minus
                </button>
                <div  style = {styles.textStyles} >
                    let eventCounter = {this.props.imgfunc[this.state.eventCounter].id};

                   {/* {
                        this.loadImage(this.props.imgfunc[this.state.eventCounter].url, 'img/default.png')
                            .then((result)=>(
                               "OK"
                            ))
                            .catch((error)=>(
                                "ERROR"
                            ))
                    }*/}
                   {/* <SliderIMG/>*/}
                    <img src={this.state.image}
                         style = {styles.imgStyles}
                         alt=""/>
                   {/* {React.createElement('img', {src: this.props.imgfunc[this.state.eventCounter].url, style: styles.imgStyles}, )}*/}
                   {/* {this.loadImage(this.props.imgfunc[this.state.eventCounter].url)}*/}
                </div>
                <button onClick={this.eventCounterPlus.bind(this)}
                        style = {styles.buttonsStyles} >
                    plus
                </button>
            </div>
        );
    }
}

export default EventAndNumber;