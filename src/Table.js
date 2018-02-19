import React, { Component } from 'react';

let styleTable = {
    backgroundColor: "red",
    fontStyle: "italic"
}

let anyStyle = {
    backgroundColor: "grey",
    fontStyle: "oblique"
};

class Table extends Component {

    render() {
        //console.log('items', this.props.items);

        return (
            <div>
                 <div>
                    <h3>
                        Table in arr, statefull component:
                    </h3>
                    <table className='tableStyle' >
                        <tbody >
                            {this.props.items.map((itemtr, indextr) =>
                            <tr key = {indextr}>
                                {itemtr.map((itemtd, indextd) =>
                                <td key = {indextd} style={anyStyle} >
                                    {itemtd}
                                </td>
                                )}
                            </tr>
                            )}
                        </tbody>
                    </table>
                 </div>
            </div>
        )
    }
}

export default Table;
