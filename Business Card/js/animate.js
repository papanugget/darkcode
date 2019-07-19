// select business card
// add event listener for click
// toggle active class
const card = document.querySelector('.business-card');
// console.log(card);
card.addEventListener('click', flipCard);

function flipCard() {
    // console.log('card clicked');
    card.classList.toggle('business-card-active');
}