import { useState } from "react";


function ButtonsHandle(props) {

    const { lists } = props
    function handleDelete(){
        props.delete(lists)
    }
    
    return (
        <td>
            <button type="button" className="btn btn-success">Sửa</button>
            <button type="button" className="btn btn-danger" onClick={handleDelete}>Xóa</button>
        </td>
    );
}

export default ButtonsHandle;
