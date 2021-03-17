let header = document.querySelector(".faq__header")
let iconContainer = document.querySelector(".faq__heading__icon-container")
let text = document.querySelector(".faq__text")

header.addEventListener("click", _ => {
    text.classList.toggle("faq__text--active");


    iconContainer.classList.toggle("faq__text--active");
    
})