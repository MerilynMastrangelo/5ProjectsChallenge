const cards = document.querySelectorAll('.memory-card');
const scoreCount = document.querySelector('.score');
const failedAttempt = document.querySelector('.failed-attempt')
let hasFlippedCard = false;
let firstCard, secondCard;
let score = 0;
let failedCount = 0;

function flipCard() {
    if(this === firstCard) return;
    this.classList.toggle('flip');

    if(!hasFlippedCard){
        // First Time Clicked
        hasFlippedCard = true;
        firstCard = this;
        console.log(hasFlippedCard, firstCard)
    }else{
        // Second Time Clicked
        secondCard = this;
        hasFlippedCard = false;

        // Match?
        if(firstCard.dataset.fruit === secondCard.dataset.fruit){
            disabledCards();
            console.log('Matching Pieces!!!');
            score++;
            scoreCount.innerText = score;
            if(score >= 3){
                alert('You won!');
            }
        }
        else{
            setTimeout(() => {
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
                resetBoard();
            },500);
            failedCount++;
            failedAttempt.innerText = failedCount;
        }
}
}

function disabledCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}


function resetBoard() {
    hasFlippedCard = false;
    // Reseting cards
    firstCard = null;
    secondCard = null;
}
cards.forEach(card => card.addEventListener('click', flipCard));