let id = 1;

function showPosts(postElement) {
    const post = document.createElement("div");
    postsContainer.appendChild(post);
    post.classList.add('post');
    post.style = `
    position: relative;
    background-color: #4992d3;
    box-shadow: 0 2px 4px rgb(0 0 0 / 30%);
    border-radius: 3px;
    padding: 20px;
    margin: 40px auto;
    width: 80vw;
    max-width: 800px;
    display: block;
    `;
    
    let postNumber = document.createElement("div");
    post.appendChild(postNumber);
    postNumber.style = `
        position: absolute;
        top: -15px;
        left: -15px;
        font-size: 15px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #fff;
        color: #296ca8;
        padding: 7px 10px;
        align-items: center;
        justify-content: center;
        display: flex;
    `;
    postNumber.innerHTML = id;

    let postText = document.createElement("div");
    post.appendChild(postText);
    postText.style = `
        margin-left: 20px;
        text-align: left;
    `

    let postTitle = document.createElement("h2");
    postText.appendChild(postTitle);
    postTitle.classList.add('post-title');
    postTitle.style.margin = "0";
    postTitle.innerHTML = postElement.title;

    let postBody = document.createElement("p");
    postText.appendChild(postBody);
    postBody.classList.add('post-body');
    postBody.style = `
        margin: 15px 0 0;
        line-height: 1.3;
    `;
    postBody.innerHTML = postElement.content;
    id++;
};

// show initial posts
posts.forEach((element) => {
    showPosts(element);
});

// display loading and other posts
function showLoading() {
    loader.style.opacity = "1";
    setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => {
            posts.forEach((element) => {
                showPosts(element);
            });
        }, 300);
    }, 1000);
}

// filter posts by input
function filterPosts(input) {
    const term = input.target.value.toLowerCase();
    const postsEl = document.querySelectorAll(".post");
    postsEl.forEach((post) => {
        const title = post.querySelector('.post-title').innerText.toLowerCase();
        const body = post.querySelector('.post-body').innerText.toLowerCase();
        if (title.indexOf(term) > -1 || body.indexOf(term) > -1) {
            post.style.display = "block";
        }
        else {
            post.style.display = "none";
        }
    });
};

window.addEventListener("scroll", ()=>{
    // taking these properties from HTML
    // scrollTop: amount scrolled from top
    // scrollHeight: total amount of scrollable content
    // clientHeight: document height
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
    // console.log( {scrollTop, scrollHeight, clientHeight} );
    if (scrollTop + clientHeight >= scrollHeight){
        showLoading();
    };
});

filter.addEventListener("input", filterPosts);