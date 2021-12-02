/**
 * ---- Pair Programming ----
 * @author Karen Ngo @careuno <github.com/careuno>
 * @author Ashley @tripleboba <github.com/tripleboba>
 */

 const wordSearch = (letters, word) => {
  if (!letters.length) return false;
  const horizontalJoin = letters.map(ls => ls.join(''));
  
  let verticalJoin = verticalWordSearch(letters, word);
  let horizontalCheck = false;
  let verticalCheck = false;

  // horizonal check
  for (let l of horizontalJoin) {
    if (l.includes(word)) horizontalCheck = true;
  };
  
  // backward horizontal check pt 2
  for (let l of horizontalJoin) {
    if (l.includes(word.split("").reverse().join(""))){
      horizontalCheck = true;
    }
  };
  
  // vertical check
  for (let l of verticalJoin) {
    if (l.includes(word)) verticalCheck = true;
  }

  // combine the check for both horizontal and vertical
  if (verticalCheck || horizontalCheck) return true;
  
  return false; // return false if none of the check passes
};

// function to check the word vertically
const verticalWordSearch = (result, word) => {
  let arr = [];
  for (let c = 0; c < result[0].length; c++) {
    let row = [];
    for (let r = 0; r < result.length; r++) {
      let veriticalWordSearch = result[r][c];
      row.push(veriticalWordSearch);
    }
    arr.push(row);
  }
  let verticalJoin = arr.map(ls => ls.join(''));
  return verticalJoin;
};

module.exports = wordSearch;