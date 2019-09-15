var HashMap = require('./hashmaps.js');
var hashmap = new HashMap();

// 1. Create a Hashmap class
function main() {
    const lor = hashmap;
    HashMap.MAX_LOAD_RATIO = 0.5;
    HashMap.SIZE_RATIO = 3;
    // lor.set("Hobbit", "Bilbo")
    // lor.set("Hobbit", "Frodo")
    // lor.set("Wizard", "Gandolf")
    // lor.set("Human", "Aragon")
    // lor.set("Elf", "Legolas")
    // lor.set("Maiar", "The Necromancer")
    // lor.set("Maiar", "Sauron")
    // lor.set("RingBearer", "Gollum")
    // lor.set("LadyOfLight", "Galadriel")
    // lor.set("HalfElven", "Arwen")
    // lor.set("Ent", "Treebeard")
    // console.log(lor)
    // console.log(lor.get("Maiar"))
    // console.log(lor.get("Hobbit"))

    console.log(lor.removeDuplicates("google"));
}

main()



// 2. WhatDoesThisDo
// it prints 10 and then 20

// const WhatDoesThisDo = function(){
//   let str1 = 'Hello World.';
//   let str2 = 'Hello World.';
//   let map1 = new HashMap();
//   map1.set(str1,10);
//   map1.set(str2,20);
//   let map2 = new HashMap();
//   let str3 = str1;
//   let str4 = str2;
//   map2.set(str3,20);
//   map2.set(str4,10);

//   console.log(map1.get(str1));
//   console.log(map2.get(str3));
// }

// WhatDoesThisDo()

// 3. 
  // 1) 
    // {[22,88]}
    // {}
    // {}
    // {}
    // {[4,15,59]}
    // {}
    // {[28,17]}
    // {}
    // {}
    // {31}
    // {10}

  // 2) 
    // {}
    // {[28,19, 10]}
    // {20}
    // {12}
    // {}
    // {5}
    // {15,33}
    // {}
    // {17}

// 4. Remove duplicates
// loop through the string, check each letter to see if it is duplicated, 
// if it is a dupe, delete it
// if it is not, add it to a new string.

// function removeDuplicates(string) {
//   HashMap.MAX_LOAD_RATIO = 0.5;
//   HashMap.SIZE_RATIO = 3;
//   const lor = hashmap;
//   // loop through the string, check each letter to see if it is duplicated, 
//   lor._hashTable = [];

//   for(var i = 0; i < string.length; i++) {
//     let value = lor._findSlot(string[i]);
//     console.log(value)
    
//     if(lor._hashTable[value] === undefined) {
//         console.log(string[i])
//         lor.set(value, string[i])
//     } 
//   }
// }

// console.log(removeDuplicates("google"));
 
