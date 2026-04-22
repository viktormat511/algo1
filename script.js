function scrollDown() {
    window.scrollTo({top: window.innerHeight, behavior: "smooth"});
}

let btn = document.querySelector(".header_btn");

btn.addEventListener("click", scrollDown);