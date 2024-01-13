import React from "react";
import './TodoItem.css'
function TodoItem(props){

    let {ele, index, dispatch} = props;
    let {data, isHidden} = ele;

    return (
        <div id="item">
            <h3>{isHidden ? "the content is hidden" : data}</h3>
            <button
                onClick={()=>{
                    dispatch({ type : "CHANGE_HIDDEN_VALUE", payload : index})
                }}
            >Toggle</button>
        </div>
    )
}

export default TodoItem;