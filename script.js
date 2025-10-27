const bgColor = document.querySelector("body")
bgColor.style.backgroundColor = "plum"

const displayBtn = document.querySelector(".hambuger-btn")
const hideBtn = document.querySelector(".cancel-btn")
const mainContainer = document.querySelector(".main-container")

displayBtn.addEventListener("click", ()=> {
    mainContainer.style.display = "block"
    displayBtn.style.display = "none"
})

hideBtn.addEventListener("click", ()=> {
    mainContainer.style.display = "none"
    displayBtn.style.display = "block"
})