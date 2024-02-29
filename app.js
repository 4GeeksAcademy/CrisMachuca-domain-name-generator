const pronoun = ['the', 'our'];
const adj = ['great', 'big'];
const noun = ['jogger', 'racoon'];
const extension = ['.com', '.es', '.net', '.us', '.io'];

function domainGenerator(array) {
    
    for(let i = 0; i < pronoun.length; i++) {
    let randomIndex = Math.floor(Math.random()*array.length);
    return array[randomIndex];
    }

}

let domainName = domainGenerator(pronoun) + domainGenerator(adj) + domainGenerator(noun) + domainGenerator(extension);
console.log(domainName);
