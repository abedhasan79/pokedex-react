import React from "react";

function ImageLight({count}) {
    return (
        <div className="image-light">
            <div style={count===0?{backgroundColor:'green'}:{}} className="image-light-1"></div>
            <div style={count===1?{backgroundColor:'green'}:{}} className="image-light-2"></div>
            <div style={count===2?{backgroundColor:'green'}:{}} className="image-light-3"></div>
            <div style={count===3?{backgroundColor:'green'}:{}} className="image-light-4"></div>
            <div style={count===4?{backgroundColor:'green'}:{}} className="image-light-5"></div>
            <div style={count===5?{backgroundColor:'green'}:{}} className="image-light-6"></div>
            <div style={count===6?{backgroundColor:'green'}:{}} className="image-light-7"></div>
            <div style={count===7?{backgroundColor:'green'}:{}} className="image-light-8"></div>
            <div style={count===8?{backgroundColor:'green'}:{}} className="image-light-9"></div>
        </div>
    )
}

export default ImageLight;