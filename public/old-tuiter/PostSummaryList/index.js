import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js"

const PostSummaryList = () => {

    return (`
    
        <div class="feed-content container p-0 list-group">
            ${
                posts.map(post => PostSummaryItem(post)).join('')
             }
        </div>
    
    `)

}

export default PostSummaryList