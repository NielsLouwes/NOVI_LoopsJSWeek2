// ==========================================
// Opdracht 1. Maak een for-loop die 3 keer "Hoera!" in de terminal logt
// Verwachte uitkomsten:
// Hoera!
// Hoera!
// Hoera!
// ==========================================

for (let index = 0; index < 3; index++) {
    console.log("Hoera")
}


// ==========================================
// Opdracht 2. Maak een for-loop die 4 keer het woord "loop..." logt, en bij de vijfde loop het woord "klaar!"
// Verwachte uitkomsten:
// loop...
// loop...
// loop...
// loop...
// klaar!
 // ==========================================

for (let index = 0; index < 4; index++) {
    console.log("loop...")
} console.log("klaar!")

// ==========================================
// Opdracht 3. Maak een for-loop die van 0 tot 15 loopt. Voor ieder getal wordt in de console gelogd of het getal even of oneven is.
// Verwachte uitkomsten:
// 0 is even
// 1 is oneven
// 2 is even
// 3 is oneven
// .... etc.
// 15 is oneven

// Tip: een getal is oneven als je het door 2 deelt en er blijft nog iets over. Een getal is even als je het deelt door 2 en er blijft niets over..
// ==========================================

for (index = 0; index < 15;index++) {
        if (index === 0) {
            console.log(index + " is even");
        }
        else if (index % 2 === 0){
            console.log(index + " is even");
        }
        else if (index % 2 !== 0) {
            console.log(index + " is oneven");
        }
}


// ==========================================
// [BONUSOPDRACHT] - optioneel: maak een for-loop die van 0 tot 9 loopt en de getallen 0 tot 9 logt.
// Echter, vanaf het getal 3 komt er een > voor ieder getal te staan, en vanaf het getal 6 komt er >> voor ieder getal te staan.
// Verwachte uitkomsten:
// 0
// 1
// 2
// > 3
// > 4
// > 5
// >> 6
// >> 7
// >> 9
// ==========================================

for (index = 0; index < 10; index++) {
    // console.log(index, index >= 3);
    if (index < 3) {
        console.log(index);
    }
    else if(index > 2 && index < 6) {
        console.log(">" + index)
    }
    else if (index > 5) {
        console.log(">>" + index )
    }
}

//BONUSOPDRACHT: FIZZBUZZZ GAME
// Players generally sit in a circle. The player designated to go first says the number "1", and the players then count upwards in turn. However, any number divisible by three is replaced by the word fizz and any number divisible by five by the word buzz. Numbers divisible by 15 become fizz buzz. A player who hesitates or makes a mistake is eliminated from the game. Write the game with rules for the first 100 turns.
//
//     For example, a typical round of fizz buzz would start as follows:
//
//     1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, Fizz Buzz, 31, 32, Fizz, 34, Buzz, Fizz, ...

for (index = 1; index < 100; index= index +1) {
    if (index % 15 === 0) {
        console.log( "Fizzbuzz");
    }
    else if (index % 3 === 0){
        console.log("Fizz");
    }
    else if (index % 5 === 0){
        console.log("Buzz");
    }
    else {console.log(index)};
}




