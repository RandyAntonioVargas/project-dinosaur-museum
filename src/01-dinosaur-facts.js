/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleDinosaurData` variable below to gain access to tickets data. This data is pulled from the `data/dinosaurs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all dinosaurs.
*/
const exampleDinosaurData = require("../data/dinosaurs");
// Do not change the line above.
/**
 * getLongestDinosaur()
 * --------------------
 * Returns an object with the longest dinosaur from the list. Converts from meters to feet.
 *
 * NOTE: To convert from meters to feet, multiply the meters by `3.281`.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @returns {Object} An object where the key is the name of the dinosaur and the value is the height of the dinosaur in feet.
 *
 * EXAMPLE:
 *  getLongestDinosaur(dinosaurs);
 *  //> { Brachiosaurus: 98.43 }
 */ // func is telling the "system" to find the dino with the longest heght as well as changing from meters to feet, the function is also letting it be known that if nothing is found, the value of "null" will appear
function getLongestDinosaur (dinosaurs) {
  let longestDinosaur = null
  for ( const dinosaur of dinosaurs ){
    //console.log (Dinosaur)
    if ( !longestDinosaur || dinosaur.lengthInMeters > longestDinosaur.lengthInMeters){
    longestDinosaur = dinosaur
   // console.log (longestDinosaur)
  }
  }
  if ( longestDinosaur === null){
    return {}
  }
 const longestDinosaurInFeet = {
  [ longestDinosaur.name] : longestDinosaur.lengthInMeters * 3.281
} 
return longestDinosaurInFeet
}


/**
 * getDinosaurDescription()
 * ---------------------
 * Returns a formatted description of a dinosaur. If the dinosaur cannot be found, returns an error message.
 *
 * NOTE: Carefully view the test output and example below to see how the returned string should be formatted.
 *
 * NOTE: The `\n` represents a new line in text.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {string} id - The unique identifier for the dinosaur.
 * @returns {string} A detailed description of the dinosaur.
 *
 * EXAMPLE:
 *  getDinosaurDescription(dinosaurs, "U9vuZmgKwUr");
 *  //> "Xenoceratops (ZEE-no-SEH-ruh-tops)\nXenoceratops had horns and a bony frill with elaborate ornamentation of projections, knobs, and spikes. It lived in the Early Cretaceous period, over 77.5 million years ago."
 *
 *  getDinosaurDescription(dinosaurs, "incorrect-id");
 *  //> "A dinosaur with an ID of 'incorrect-id' cannot be found."
 */
// function getDinosaurDescription(dinosaurs, id) {
//   for (let dinosaur of dinosaurs){
//     if (id === dinosaur.dinsoaurId){
//       years= Math.min(...dinosaur.mya)
//       return `${dinosaur.name} (${dinosaur.pronunciation})\n${dinosaur.info} It lived in the ${dinosaur.period} period, over ${years} million years ago.`

//     }
//     //console.log (dinosaur)
//     //console.log (id)
//   }
//    return "A dinosaur with an ID of 'incorrect-id' cannot be found."
// }
function getDinosaurDescription(dinosaurs, id) {
  for (let dinosaur of dinosaurs) {
    if (id === dinosaur.dinosaurId) { // if the STRING (id) equals dinosaur id
      years = Math.min(...dinosaur.mya) // years EQUALS Math.min(find the smallest value in array) using the spread operator
      return `${dinosaur.name} (${dinosaur.pronunciation})\n${dinosaur.info} It lived in the ${dinosaur.period} period, over ${years} million years ago.`
    }
  }
  return "A dinosaur with an ID of 'incorrect-id' cannot be found." 
}
/**
 * getDinosaursAliveMya()
 * ---------------------
 * Returns an array of dinosaurs who were alive at the given `mya` (i.e. "millions of years ago") value. If a `key` is provided, returns the value of that key for each dinosaur alive at that time. Otherwise, returns the ID.
 *
 * If the dinosaur only has a single value for `mya`, allows for the `mya` value to be equal to the given value or one less. For example, if a dinosaur has a `mya` value of `[29]`, the dinosaur's information will be returned if `29` is entered or `28` is entered.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {number} mya - "Millions of years ago."
 * @param {string} key - An optional parameter. If included, for dinosaurs that lived during the `mya` value given, will return the value of the supplied key. Otherwise, returns the ID.
 * @returns {*[]} An array of values, which depend on the key given. The array should only include data of dinosaurs who lived during the given time period.
 *
 * EXAMPLE:
 *  getDinosaursAliveMya(dinosaurs, 150);
 *  //> ["YLtkN9R37", "GGvO1X9Zeh", "BFjjLjea-O", "V53DvdhV2A"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65);
 *  //> ["WHQcpcOj0G"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65, "name");
 *  //> ["Dracorex"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65, "unknown-key");
 *  //> ["WHQcpcOj0G"]
 */ // this function should return the Dino value as well ans the MYA value for the perticular search, 
function getDinosaursAliveMya(dinosaurs, mya, key){
let myArray = [];
let myNewArray = [];
dinosaurs.forEach(dinosaur => {
  if(dinosaur.mya.length === 1){
    if(dinosaur.mya >= mya && dinosaur.mya <= mya + 1){
        myArray.push(dinosaur)
    };
  }else{
    if(dinosaur.mya[0] >= mya && dinosaur.mya[1] <= mya){
      myArray.push(dinosaur)
    }
  }
})}


module.exports = {
  getLongestDinosaur,
  getDinosaurDescription,
  getDinosaursAliveMya,
};
