const cards = document.querySelectorAll('.memory-card');
const scoreCount = document.querySelector('.score');
const failedAttempt = document.querySelector('.failed-attempt');

let hasFlippedCard = false;
let firstCard, secondCard;
let score = 0, failedCount = 0;

function flipCard() {
    if(this === firstCard) return;
    // Add and remove a class to see the front face
    this.classList.toggle('flip');

    if(!hasFlippedCard){
        // First Time Clicked
        hasFlippedCard = true;
        firstCard = this;
    }else{
        // Second Time Clicked
        secondCard = this;
        hasFlippedCard = false;

        // Match?
        if(firstCard.dataset.fruit === secondCard.dataset.fruit){
            matchingCards();
        }
        else{
            unflipingCards();
        }
}
}

function disabledCards(){
    // Prevent the card can't eb clicked again
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

function matchingCards(){
    disabledCards();
    // Counting scores
    score++;
    scoreCount.innerText = score;
    // Won message
    if(score >= 3){
        alert('You won!');
    }
}

function unflipingCards(){
    // We remove the flip class means that card returns to back face after 0.5s
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    },500);
    // Counting failed Attempt
    failedCount++;
    failedAttempt.innerText = failedCount;
}

function resetBoard() {
    hasFlippedCard = false;
    // Reseting both cards preventing double clicks in same card
    firstCard = null;
    secondCard = null;
}

cards.forEach(card => card.addEventListener('click', flipCard));