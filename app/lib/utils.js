

export function giveNineCategories (categories){

    if(categories == null || categories == "" || categories == []) return;

    const onlyCategories = categories.map((item)=>item.category);

    const uniqueCategories = [...new Set(onlyCategories)];
  
    const first9UniqueCategories = uniqueCategories.slice(0, 9);
  
    return Array.from(first9UniqueCategories);
}

export function lowerCaseFirstLetterOfEveryWord (str) {
    if (str.length === 0) return str; // Return empty string if input is empty
     // Split the string into words
  let words = str.split(' ');

  // Lowercase the first letter of the first word
  words[0] = words[0].charAt(0).toLowerCase() + words[0].slice(1);

  // If there is a second word, lowercase the entire word
  if (words.length > 1) {
    words[1] = words[1].toLowerCase();
  }

  // Join the words with a hyphen
  return words.join('-');
}