let accordionItem = Array.from(document.getElementsByClassName("accordion__faq"));


function accordion() {

    for(let i = 0; i < accordionItem.length; i++) {
        let accordionHeader = accordionItem[i].children[0];
        let accordionText = accordionItem[i].children[1];
        let firstBarInIconBtn = accordionItem[i].children[0].children[1].children[0];

       accordionHeader.addEventListener("click", _ => {
           accordionText.classList.toggle("faq__text--active")
           accordionItem[i].classList.toggle("accordion__faq--active")
           firstBarInIconBtn.classList.toggle("bar-minus")
       })
    }
}

accordion()

















































// let header = document.querySelector(".faq__header")
// let iconContainer = document.querySelector(".faq__heading__icon-container")
// let text = document.querySelector(".faq__text")
// let accordionFaq = document.querySelector(".accordion__faq")
// let accordionFaqs = document.querySelector(".accordion__faqs")

// function openAccordion(event) {
//     let closestHeader = event.target.closest(".faq__header");
//     let closestText = event.target.closest(".faq__text");

//     if(event.target === closestHeader)  {
//         closestText.classList.toggle("faq__text--active");

//     }

// }

// accordionFaqs.addEventListener("click", openAccordion)