const vowelSubmit = document.querySelector('form');
const inputTextValue = document.querySelector('#inputText');

const vowelCounterFc = () => {
    if(inputTextValue.value <= 0){
        alert('Please enter some text');
    }else{
        // Convert to lower text eliminates the intial tabs/spaces
        let lowerText = inputTextValue.value.toLowerCase().trim();
        // grab the string and tranform in an array
        let textV = lowerText.split('');
        // Filter if there are any vowel
        const filteredText = textV.filter(vowel => vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u') 
        // Give us how many vowels 
        alert(`There are ${filteredText.length} vowel(s)`);
    }
};

vowelSubmit.addEventListener('submit', (e) => {
    e.preventDefault();
    vowelCounterFc();
});