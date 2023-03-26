const NavigationSidebar = () => {
    return (`
            <div id="navbar-container" class="mb-3">
                <div id="navbar" class="list-group">
                    <a class="list-group-item" href="../navigation.html">
                        <i class="fa-brands fa-twitter"></i>
                    </a>
                    <a class="list-group-item" href="#">
                        <i class="fa-solid fa-house-chimney"></i>
                        <span class="d-xl-inline d-none">Home</span>
                    </a>
                    <a class="list-group-item active" href="#">
                        <i class="fa-solid fa-hashtag"></i>
                        <span class="d-xl-inline d-none">Explore</span>
                    </a>
                    <a class="list-group-item" href="#">
                        <i class="fa-solid fa-bell"></i>
                        <span class="d-xl-inline d-none">Notifications</span>
                    </a>
                    <a class="list-group-item" href="#">
                        <i class="fa-solid fa-envelope"></i>
                        <span class="d-xl-inline d-none">Messages</span>
                    </a>
                    <a class="list-group-item" href="#">
                        <i class="fa-solid fa-bookmark"></i>
                        <span class="d-xl-inline d-none">Bookmarks</span>
                    </a>
                    <a class="list-group-item" href="#">
                        <i class="fa-solid fa-list"></i>
                        <span class="d-xl-inline d-none">Lists</span>
                    </a>
                    <a class="list-group-item" href="#">
                        <i class="fa-solid fa-user"></i>
                        <span class="d-xl-inline d-none">Profile</span>
                    </a>
                    <a class="list-group-item" href="#">
                        <i class="fa-solid fa-ellipsis"></i>
                        <span class="d-xl-inline d-none">More</span>
                    </a>
                </div>
            </div>
            <button id="tweet" class="btn-primary position-relative rounded-pill w-100 py-2">Tweet</button>
 `);
}
export default NavigationSidebar;