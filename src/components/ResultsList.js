import React from 'react';

function ResultsList(props) {
    return(
        <div className="list">
           <h2 className="list__title">{props.listTitle}</h2>
            <ul className="list__wrapper">
                {props.resultsList.map((item, index)=>{
                    return (
                        index < 3 && 
                        <li key={props.listTitle + item[item.wrapperType+'Id']} 
                            className="list__entry"
                        >
                            {item[props.entryToDisplay]}
                        </li>
                    )
                })}
            </ul>
        </div>
    ) 
}
export default ResultsList;