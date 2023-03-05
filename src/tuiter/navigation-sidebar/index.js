import React from "react"

const NavigationSidebar = (
    {
        active = 'explore'
    }) => {

    return (<div id="navbar-container" className="mb-3">
        <div id="navbar" className="list-group">
            <a className="list-group-item"
               href="../navigation.html">
                <i className="fa-brands fa-twitter"></i>
            </a>
            <a className={`list-group-item ${active === 'home' ? 'active ' : ''}`}
               href="#">
                <i className="fa-solid fa-house-chimney pe-1"></i>
                <span className="d-xl-inline d-none">Home</span>
            </a>
            <a className={`list-group-item ${active === 'explore' ? 'active ' : ''}`}
               href="#">
                <i className="fa-solid fa-hashtag pe-1"></i>
                <span className="d-xl-inline d-none">Explore</span>
            </a>
            <a className={`list-group-item ${active === 'notifications' ? 'active ' : ''}`}
               href="#">
                <i className="fa-solid fa-bell pe-1"></i>
                <span className="d-xl-inline d-none">Notifications</span>
            </a>
            <a className={`list-group-item ${active === 'messages' ? 'active' +
                ' ' : ''}`}
               href="#">
                <i className="fa-solid fa-envelope pe-1"></i>
                <span className="d-xl-inline d-none">Messages</span>
            </a>
            <a className={`list-group-item ${active === 'bookmarks' ? 'active' +
                ' ' : ''}`}
               href="#">
                <i className="fa-solid fa-bookmark pe-1"></i>
                <span className="d-xl-inline d-none">Bookmarks</span>
            </a>
            <a className={`list-group-item ${active === 'lists' ? 'active ' : ''}`}
               href="#">
                <i className="fa-solid fa-list pe-1"></i>
                <span className="d-xl-inline d-none">Lists</span>
            </a>
            <a className={`list-group-item ${active === 'profile' ? 'active' +
                ' ' : ''}`}
               href="#">
                <i className="fa-solid fa-user pe-1"></i>
                <span className="d-xl-inline d-none">Profile</span>
            </a>
            <a className={`list-group-item ${active === 'more' ? 'active ' : ''}`}
               href="#">
                <i className="fa-solid fa-ellipsis pe-1"></i>
                <span className="d-xl-inline d-none">More</span>
            </a>
        </div>
        <button id="tweet"
                className="btn-primary position-relative
                    rounded-pill w-100 py-2">
            Tweet
        </button>
    </div>);
}
export default NavigationSidebar;
