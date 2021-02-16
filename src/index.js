import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function MediaCard({ profilePic, title, time, body, imgUrl }) {
    return <div>
        <div className="f-card">
            <div className="header">
                <div className="options"><i className="fa fa-chevron-down"></i></div>
                <img className="co-logo" src={profilePic} />
                <div className="co-name"><a href="#">{title}</a></div>
                <div className="time"><a href="#">{time}</a> · <i className="fa fa-globe"></i></div>
            </div>
            <div className="content">
                <p>{body}<a href="http://placehold.it/300">http://placehold.it/300</a> See More</p>
            </div>
            <div className="reference">
                <img className="reference-thumb" src={imgUrl} />
            </div>
        </div>
    </div>
}
ReactDOM.render(
    <>
        <MediaCard profilePic="https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg"
            title="Node" time={new Date().toLocaleTimeString()} body="Height is optional, if no height is specified the image will be a square.Example:"
            imgUrl="https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg" />
        
    </>,
    document.getElementById('root')
);