import React, { Component } from 'react';

class TableWithautJSX extends Component {

    render() {
        return (
            React.createElement('h3',null, 'Table in array, without JSX' ,  React.createElement('table', {className:'tableStyle'},
                    React.createElement('tbody', null, this.props.array.map(function (items, indexTr) {
                        //console.log(indexTr);
                        return React.createElement ('tr', {key: indexTr}, items.map(function (item, indexTd) {
                            //console.log(indexTd);
                            return React.createElement ('td', {key: indexTd}, item);
                        }))
                    }))
                )
            )
        )
    }
}

export default TableWithautJSX;