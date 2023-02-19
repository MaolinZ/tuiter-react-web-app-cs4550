export default function PostSummaryItem(post) {
    const {topic, userName, title, time, image, tweets} = post

    return (`
        <div class="list-group-item text-muted d-flex">
            <div class="mx-1 w-100">
                ${ post.hasOwnProperty('topic') && topic !== '' ? `${topic} <br>` : '' }
                <div class="d-inline-flex">
                    <p class="h4 fw-bold">${userName}</p>
                    <i class="fa-solid fa-circle-check ps-1"></i>
                </div>
                -   ${time}
                <p class="h5 fw-bold">
                    ${title}
                </p>
                ${ post.hasOwnProperty('tweets') && tweets !== '' ? `${tweets} Tweets` : '' }
            </div>
            <img class="post-thumbnail" src="${image}" alt="">
        </div>
        
    `)
}