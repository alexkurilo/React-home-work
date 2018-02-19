import React, { Component } from 'react';
/*import React from 'react';*/
import ReactDOM from 'react-dom';
import { render } from 'react-dom'

    var array = [
        [11,12,13],
        [21,22,23],
        [31,32,33]
    ];

class TableCleanJS extends React.Component {
    render(){
        return (
            React.createElement('table', {className:'tableStyle'},
                React.createElement('tbody', null, array.map(function (items, indexTr) {
                    //console.log(indexTr);
                    return React.createElement ('tr', {key: indexTr}, items.map(function (item, indexTd) {
                        //console.log(indexTd);
                        return React.createElement ('td', {key: indexTd}, item);
                    }))
                }))
            )
        )
    }
}

/*ReactDOM.render(
    React.createElement( TableCleanJS, null),document.getElementById('container')
);*/

export default TableCleanJS;


