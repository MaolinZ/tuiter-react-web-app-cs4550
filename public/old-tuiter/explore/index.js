/* eslint-env jquery */

import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";

function exploreComponent() {
    $('#wd-explore').append(`
      <div class="row mt-3">
       <div class="col-2 col-md-2 col-lg-1 col-xl-2"> 
        ${NavigationSidebar()}
       </div>
       <div class="col-10 col-lg-7 col-xl-6">
       <div id="top-bar" class="mb-2">
                    <div id="search-bar-wrapper" class="d-inline-flex col-11">
                        <i class="fa-solid fa-magnifying-glass search-icon input-group-text text-black"></i>
                        <input type="text"
                               title="Search Twitter"
                               placeholder="Search Twitter"
                               id="search-input"
                               class="form-control">
                    </div>
                    <a id="settings" href="#"><i class="fa-sharp fa-solid fa-gear col-1"></i></a>
                </div>
                <ul class="nav nav-tabs mb-2">
                    <li class="nav-item"><a class="nav-link active" href="#">For you</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Trending</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">News</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Sports</a></li>
                    <li class="nav-item"><a class="nav-link d-md-block d-sm-none" href="#">Entertainment</a></li>
                </ul>
                <div class="image-container container position-relative p-0">
                    <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg" alt=""
                         class="img-fluid">
                    <h2 class="image-title">SpaceX's Starship</h2>
                </div>
        ${PostSummaryList()}
       </div>
       <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
        ${WhoToFollowList()}
       </div>
      </div>
   `);
}
$(exploreComponent);