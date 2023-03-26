export default function WhoToFollowListItem(who) {

    const {avatarIcon, userName, handle} = who

    return (`
        <div class="suggested-follow list-group-item d-inline-flex align-items-center py-0">
                    <img class="avatar-rounded me-3" src="${avatarIcon}" alt="">
                    <div class="d-block my-2 w-100 text-nowrap">
                        <div class="d-inline-flex position-absolute align-items-center">
                            <p class="fw-bold m-0">${userName}</p>
                            <i class="fa-solid fa-circle-check ps-1"></i>
                        </div>
                        <br>
                        ${handle}
                    </div>
                    <button class="btn-primary px-2 py-1 rounded-pill float-end">Follow</button>
                </div>
    `)
}