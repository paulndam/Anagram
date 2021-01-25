// Anangram

// It is a word, phrase or name formed by rearranging the letters of the word, phrase or name to produce a different word.Example is Cinema, formed to be IceMan.

// wrtie a function that takes two strings and determines if the second string is an anagram or not

function isAnagram(str1, str2) {
  // first check if the length of your strings are equal to each other,if they are not then return false,
  if (str1.length !== str2.length) {
    return false;
  }
  // creat two empty objects to store the freq counts
  let freqcount1 = {};

  // implement a counter frequency to count the occurence of each string in you object
  //then loop thru the each strings and check to see if a letter in that array of string or object of string exist,if it does then increment but if it doesn't then set a count for it

  for (let i = 0; i < str1.length; i++) {
      let letter = str1[i]
    freqcount1[letter] ? (freqcount1[letter] += 1) : (freqcount1[letter] = 1);
  }
  console.log(freqcount1)

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i]
    // freqcount1[letter] ? (freqcount1[letter] += 1) : (freqcount1[letter] = 1);

    if (!freqcount1[letter]) {
        console.log(freqcount1[letter])
      return false;
    } else {
      freqcount1[letter] -= 1;
    }

  }

  return true
}

console.log(isAnagram("anagram", "nagaram")); //true
console.log(isAnagram("rat", "car")); //false
