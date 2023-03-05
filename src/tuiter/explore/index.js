import React from "react";
import PostSummaryList from "../post-summary-list";

export default function Explore() {

    return (
        <div>
            <div id="top-bar" className="mb-2">
                <div id="search-bar-wrapper" className="d-inline-flex col-11">
                    <i id="search-icon"
                       className="fa-solid fa-magnifying-glass input-group-text text-black"></i>
                    <input type="text"
                           title="Search Twitter"
                           placeholder="Search Twitter"
                           id="search-input"
                           className="form-control"/>
                </div>
                <a id="settings" href="#"><i
                    className="fa-sharp fa-solid fa-gear col-1"></i></a>
            </div>
            <ul className="nav nav-tabs mb-2">
                <li className="nav-item"><a className="nav-link active"
                                            href="#">For you</a></li>
                <li className="nav-item"><a className="nav-link"
                                            href="#">Trending</a></li>
                <li className="nav-item"><a className="nav-link"
                                            href="#">News</a></li>
                <li className="nav-item"><a className="nav-link"
                                            href="#">Sports</a></li>
                <li className="nav-item"><a
                    className="nav-link d-md-block d-sm-none"
                    href="#">Entertainment</a></li>
            </ul>
            <div className="image-container container position-relative p-0">
                <img
                    src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg"
                    alt=""
                    className="img-fluid"/>
                <h2 className="image-title">SpaceX's Starship</h2>
            </div>
            <PostSummaryList/>
        </div>
    )

}