/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let copy = x;
  let rev = 0;
  let min = false;
  
  if(copy < 0){
    min = true;
  }
  
  copy = Math.abs(copy);
  
  while(copy > 0){
    let rem = copy % 10;
    rev = (10 * rev) + rem;
    copy = Math.floor(copy / 10);
  } 
  
  if(min){
    rev = rev * (-1);
  } 
  
  // 32-bit signed integer range: -2^31 to 2^31 - 1
  let maxLimit = Math.pow(2, 31) - 1;  // 2,147,483,647
  let minLimit = -Math.pow(2, 31);     // -2,147,483,648
  
  if(rev > maxLimit || rev < minLimit) {
    return 0;
  }
  
  return rev;
};