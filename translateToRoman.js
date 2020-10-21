//TRANSLATE TO ROMAN NUMERALS

const translateToRoman = (num) => {
  // make a key
  const romanNum = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];
  // if num is zero return empty string
  if (num === 0) {
    return "";
  }
  // loop through key
  for (let i = 0; i < romanNum.length; i++) {
    console.log(romanNum[i][0]);
    //if num is greater than or equal to the first value in whichever index of the key you are looping through...
    if (num >= romanNum[i][0]) {
      // return the second value in the array (the roman numeral),
      //and run it again with whatever number we got from the key subtracted from the original num
      //and again until we cant do that. :)
      return romanNum[i][1] + translateToRoman(num - romanNum[i][0]);
    }
  }
};
console.log(translateToRoman(12));

module.exports = {
  translateToRoman,
};
