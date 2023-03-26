import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShareNodes} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {toggleLike} from "../reducers/tuits-reducer";

export default function TuitStats(
    {
        stats = {
            _id: -1,
            liked: false,
            replies: 0,
            retuits: 0,
            likes: 0
        },
    }
) {

    const {_id, liked, replies, retuits, likes} = stats

    const dispatch = useDispatch()
    const handleLike = (id) => {
        dispatch(toggleLike(id))
    }

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
                <span className={"like-icon"} onClick={() => handleLike(_id)}>
                    {liked ?
                        <i className="fa-solid fa-heart px-2"
                           style={{color: "#FF0066"}}/>
                        :
                        <i className="fa-regular fa-heart px-2"/>}
                </span>
                {likes}
            </div>
            <div>
                <FontAwesomeIcon icon={faShareNodes}/>
            </div>
        </div>
    )
}