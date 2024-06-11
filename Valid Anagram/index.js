// Valid Anagram
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// Input s = "anagram", t = "nagaram" --> ture;
// Input s = "rat", t = "cat" --> false;

// solving logic --> we sort the string letter so if it is an anagram then it will be the same letter like
// s = anagram --> ["a","a","a","g","n", "m"]
// t = nagaram --> ["a","a","a","g","n", "m"] --> true

const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  s = s.split("").sort().join("");
  t = t.split("").sort().join("");

  return s === t;
};

console.log(isAnagram("anagram", "nagaram"));