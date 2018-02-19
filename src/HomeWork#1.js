import React, { Component } from 'react';
import Tablefunction from './TableFunction';
import Table from './Table';
import TableWithautJSX from './TableWithautJSX';

const arr = [
    [11,12,13],
    [21,22,23],
    [31,32,33]
];

class HomeWork1 extends Component{

    render(){
        return(
            <div className='wrapper'>
                Home Work #1
                <hr/>
                <Tablefunction itemsfunc={arr}/>
                <hr/>
                <Table items={arr}/>
                <hr/>
                <TableWithautJSX array={arr}/>
            </div>
        )
    }
}

export default HomeWork1;