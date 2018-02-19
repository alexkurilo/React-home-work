import React, { Component } from 'react';

import ColorByEvent from './ColorByEvent';
import EventAndNumber from './EventAndNumber';

const imgArr = [
    {
        id: 1,
        url: 'http://www.o-prirode.com/_ph/48/330682859.jpg',
    },
    {
        id: 2,
        url: 'http://relaxic.net/wp-content/uploads/2011/11/winter_054.jpg',
    },
    {
        id: 3,
        url: 'http://mirpozitiva.ru/uploads/posts/2016-10/1476433702_00.jpg',
    },
    {
        id: "default",
        url: '',
    }
];
const defaultImg = [
    {
        id: "default",
        url: 'img/default.png',
    }
]
class HomeWork2 extends Component{
    render(){
        return(
            <div className='wrapper'>
                Home Work #2
                <hr/>
                <ColorByEvent/>
                <hr/>
                <EventAndNumber imgfunc={imgArr}
                                defaultImg={defaultImg}
                />
            </div>
        )
    }
}



export default HomeWork2;

