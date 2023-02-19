import WhoToFollowListItem from "./WhoToFollowListItem.js"
import who from "./who.js";
const WhoToFollowList = () => {

    return (`
        <ul id="follow-sidebar" class="list-group">
            <div class="list-group-item h4 fw-bold">Who to follow</div>
            ${
            
            who.map(user => WhoToFollowListItem(user)).join('')
            
            }
        </ul>
    `)
}

export default WhoToFollowList;