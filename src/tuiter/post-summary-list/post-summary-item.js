import React from "react";

export default function PostSummaryItem(
    {
        post = {
            _id: 123,
            topic: "Web Development",
            userName: "ReactJS",
            title: "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs ",
            time: "2h",
            image: "/tuiter/images/react-black.png",
            tweets: ""
        },
    }
) {
    const {topic, userName, title, time, image, tweets} = post

    return (
        <div className="list-group-item text-muted d-flex">
            <div className="mx-1 w-100">
                {post.hasOwnProperty('topic') && topic !== '' ?
                    <div>{topic}</div> : ''}
                {post.hasOwnProperty('userName') && userName !== '' ?
                    <div className="d-inline-flex align-items-center">
                        <div className="text-white post-user fw-bold">{userName}</div>
                        <i className="text-white fa-solid fa-circle-check p-1"></i>
                        - {time}
                    </div> : time}
                <div className="text-white post-title fw-bold">
                    {title}
                </div>
                {post.hasOwnProperty('tweets') && tweets !== '' ? `${tweets} Tweets` : ''}
            </div>
            <img className="post-thumbnail" src={image} alt=""/>
        </div>

    )
}