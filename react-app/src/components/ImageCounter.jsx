import React from 'react'
//пример создания компонента функциональным стилем
var ImageCounter = function (props) {
    return (
        <div>
            <div>{props.count}</div>
            <img alt="" width="200" src={props.srcUrl} onClick={props.onCount}></img>
        </div>
    )
}

export default ImageCounter;