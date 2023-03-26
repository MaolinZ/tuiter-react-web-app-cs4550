import React from "react";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuits-reducer";

export default function TuitItem(
    {
        post = {
            _id: 123,
            topic: "Web Development",
            userName: "ReactJS",
            title: "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs ",
            time: "2h",
            image: "/old-tuiter/images/react-black.png",
            liked: true,
            replies: 23,
            retuits: 32,
            likes: 345,
            handle: "@reactjs",
            tuit: "React is a popular JavaScript library used for building user interfaces (UIs) in web applications. Developed by Facebook, React allows developers to create reusable UI components and manage the state of the application in a more efficient and organized manner. React utilizes a virtual DOM (Document Object Model) which allows it to update the UI efficiently without re-rendering the entire page. This makes React highly performant and scalable, which is why it has become one of the most widely used frameworks for web development. "
        },
    }
) {
    const {
        _id,
        topic,
        userName,
        title,
        time,
        image,
        liked,
        replies,
        retuits,
        likes,
        handle,
        tuit
    } = post

    const dispatch = useDispatch()
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id))
    }

    return (
        <div className="list-group-item text-muted">
            <div className="mx-1 w-100 d-flex">
                <div className="me-4">
                    <img className="post-avatar" src={image} alt=""/>
                </div>
                <div className="d-block w-100">
                    {post.hasOwnProperty('userName') && userName !== '' ?
                        <div className="d-inline-flex align-items-center">
                            <div
                                className="text-white post-user fw-bold">{userName}</div>
                            <i className="text-white fa-solid fa-circle-check ps-1 pe-2"></i>
                            {post.hasOwnProperty('handle') && handle !== '' ?
                                handle + ' ' : ''
                            }
                            • {time}
                        </div> : time}
                    <i className="delete-tuit fa-solid fa-x float-end pe-2"
                    onClick={() => deleteTuitHandler(_id)}/>
                    <div className="text-white tuit-body">
                        {tuit}
                        <TuitStats stats={{
                            _id: _id,
                            replies: replies,
                            retuits: retuits,
                            likes: likes,
                            liked: liked
                        }}/>
                    </div>
                    {post.hasOwnProperty('tweets') && retuits !== '' ? `${retuits} Tweets` : ''}
                </div>
            </div>
        </div>
    )
}