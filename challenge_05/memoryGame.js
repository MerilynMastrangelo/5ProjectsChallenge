const cards = document.querySelectorAll('.memory-card');
const overlay = document.querySelectorAll('.overlay')
let hasFlippedCard = false;
let firstCard, secondCard;


cards.forEach(card => card.addEventListener('click', () => {
    card.classList.toggle('flip');
     
    if(!hasFlippedCard){
        // First Time Clicked
        hasFlippedCard = true;
        firstCard = card;

    }else{
        // Second Time Clicked
        secondCard = card;
        hasFlippedCard = false;

        // Match?
        if(firstCard.dataset.fruit === secondCard.dataset.fruit){
            console.log('Matching Pieces!!!');
            // alert('Matching Pieces!!!');
        }else{
            console.log("Pieces don't match! Sorry.");
            // alert("Pieces don't match! Sorry.");
        }
    }
}))

