

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

export function calculateDiscount(price,discountPercentage){
  const calculatedDiscount = Math.floor(price - (price * discountPercentage / 100));
  return calculatedDiscount;
}

export function averageRatingCalculator(ratings) {
  // Check if the ratings array is not empty
  if (ratings.length === 0) {
    return 0; // or return some other default value
  }

  // Calculate the sum of the ratings
  const totalSum = ratings.reduce((acc, rating) => acc + rating, 0);

  // Calculate the average rating
  const avgRating = totalSum / ratings.length;

  return Math.floor(avgRating) ;
}

export function calculateSubtotal (quantity,price,discount,discountPercentage) {
  if(discount == true)
  {
    const newPrice = calculateDiscount(price,discountPercentage);
    return newPrice * quantity;
  }
  return price * quantity;
}