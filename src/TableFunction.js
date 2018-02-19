import React from 'react';

const Tablefunction = function(props){

    return(
        <div>
            <h3>
                Table in arr, stateless functional component:
            </h3>
            <table className='tableStyle' >
                <tbody >
                {props.itemsfunc.map((itemtr, indextr) =>
                    <tr key = {indextr}>
                        {itemtr.map((itemtd, indextd) =>
                            <td key = {indextd} >
                                {itemtd}
                            </td>
                        )}
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}

export default Tablefunction;