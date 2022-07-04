// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);

//   }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   }

//   return gifts;
// }
// wrapGifts(gifts);


const cardNames = ["James", "John", "Jonah"]
const eventName = "Birthday"
function writeCards(cardNames, eventName){
    let newCards = []
    for (let j = 0; j < cardNames.length; j++){
        newCards.push(`Thank you, ${cardNames[j]}, for the wonderful ${eventName} gift!`)
    }
    return newCards;
}
writeCards(cardNames);


function countDown (count) {
    while (count > -1) {
        console.log(count--)
    } 
}

 
