import React from "react";
import WhoToFollowListItem from "./who-to-follow-list-item"
import {useSelector} from "react-redux";

export default function WhoToFollowList() {

    const who = useSelector(
        (state) => state.who);

    return (
        <ul id="follow-sidebar" className="list-group">
            <h4 id="who-to-follow-label" className="list-group-item h4 fw-bold">Who to follow</h4>
            {
                who.map(user => <WhoToFollowListItem key={user._id} who={user}/>)
            }
        </ul>
    )
}