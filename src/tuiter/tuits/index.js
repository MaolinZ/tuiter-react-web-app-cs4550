import React from "react"
import { useSelector } from "react-redux";
import TuitItem from "./tuit-item"
const TuitsList = () => {

    const tuits = useSelector((state) => state.tuits)

    return(
        <div className={"home-component"}>
            <ul className="list-group">
                {
                    tuits.map(post =>
                        <TuitItem
                            key={post._id} post={post}/> )
                }
            </ul>
        </div>
    )
}

export default TuitsList