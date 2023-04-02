import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShareNodes} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

export default function TuitStats(
    {
        post = {
            _id: 123,
            topic: "Web Development",
            userName: "ReactJS",
            title: "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs ",
            time: "2h",
            image: "/old-tuiter/images/react-black.png",
            replies: 23,
            retuits: 32,
            likes: 345,
            liked: true,
            dislikes: 30,
            disliked: false,
            handle: "@reactjs",
            tuit: "React is a popular JavaScript library used for building user interfaces (UIs) in web applications. Developed by Facebook, React allows developers to create reusable UI components and manage the state of the application in a more efficient and organized manner. React utilizes a virtual DOM (Document Object Model) which allows it to update the UI efficiently without re-rendering the entire page. This makes React highly performant and scalable, which is why it has become one of the most widely used frameworks for web development. "
        },
    }) {

    const {liked, replies, retuits, likes, disliked, dislikes} = post

    const dispatch = useDispatch()

    return (
        <div className={"text-white d-flex justify-content-around pe-4 mt-3"}>
            <div>
                <i className="fa-regular fa-comment px-2"/>
                {replies}
            </div>
            <div>
                <i className="fa-solid fa-retweet px-2"></i>
                {retuits}
            </div>
            <div>
                <span className={"like-icon"}
                      onClick={() => dispatch(updateTuitThunk({
                          ...post,
                          likes: (liked ? likes - 1 : likes + 1),
                          liked: !liked,
                      }))}>
                    {liked ?
                        <i className="fa-solid fa-heart px-2"
                           style={{color: "#FF0066"}}/>
                        :
                        <i className="fa-regular fa-heart px-2"/>}
                </span>
                {likes}
            </div>
            <div>
                <span className={"dislike-icon"}
                      onClick={() => dispatch(updateTuitThunk({
                          ...post,
                          dislikes: (disliked ? dislikes - 1 : dislikes + 1),
                          disliked: !disliked,
                      }))}>
                    <i className={`${disliked ? 'fa-solid' : 'fa-regular'} 
                    fa-thumbs-down px-2`}/>
                </span>
                {dislikes}
            </div>
            <div>
                <FontAwesomeIcon icon={faShareNodes}/>
            </div>
        </div>
    )
}