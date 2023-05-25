import React from "react";

function Todolist(props){
     return(
     
        <div>
            <li className="list-item">
            {props.item}
           
              <span className="icons">
              <i className="fa-sharp fa-solid fa-trash icon-delete" onClick={e=>{
                props.deleteItem(props.index);
              }}></i>
              
              </span>
            </li>
        </div>
     );
}
export default Todolist;