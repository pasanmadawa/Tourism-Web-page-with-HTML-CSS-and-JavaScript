const scrollTop = document.querySelector(".toTop");

window.addEventListener("scroll", chechHeight)

function chechHeight(){
    if(window.scrollY > 200) {
        scrollTop.style.display = "flex" 
    }
    else{
        scrollTop.style.display = "none"
    }
}

scrollTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})