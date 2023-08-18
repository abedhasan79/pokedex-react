import React from "react";

function ImageLight({ count }) {
    return (
        <div className="image-light">
            <div
                style={count === 0 ? { backgroundColor: 'green' } : {}}
                className={`image-light-1 ${count === 0 ? 'toLightUp' : ''}`}
            ></div>
            <div
                style={count === 1 ? { backgroundColor: 'green' } : {}}
                className={`image-light-2 ${count === 1 ? 'toLightUp' : ''}`}
            ></div>
            <div
                style={count === 2 ? { backgroundColor: 'green' } : {}}
                className={`image-light-3 ${count === 2 ? 'toLightUp' : ''}`}
            ></div>
            <div
                style={count === 3 ? { backgroundColor: 'green' } : {}}
                className={`image-light-4 ${count === 3 ? 'toLightUp' : ''}`}
            ></div>
            <div
                style={count === 4 ? { backgroundColor: 'green' } : {}}
                className={`image-light-5 ${count === 4 ? 'toLightUp' : ''}`}
            ></div>
            <div
                style={count === 5 ? { backgroundColor: 'green' } : {}}
                className={`image-light-6 ${count === 5 ? 'toLightUp' : ''}`}
            ></div>
            <div
                style={count === 6 ? { backgroundColor: 'green' } : {}}
                className={`image-light-7 ${count === 6 ? 'toLightUp' : ''}`}
            ></div>
            <div
                style={count === 7 ? { backgroundColor: 'green' } : {}}
                className={`image-light-8 ${count === 7 ? 'toLightUp' : ''}`}
            ></div>
            <div
                style={count === 8 ? { backgroundColor: 'green' } : {}}
                className={`image-light-9 ${count === 8 ? 'toLightUp' : ''}`}
            ></div>
        </div>
    )
}

export default ImageLight;