/* 1. Write a JavaScript function to convert a number from one base to another.  */

/* 2. Write a JavaScript function to convert a binary number to a decimal number.  */

function bin_to_dec(num){

    return parseInt(num, 2);
    }

console.log(bin_to_dec('110011'));
console.log(bin_to_dec('100'));

/* 3. Write a JavaScript function to convert a decimal number to binary, hexadecimal or octal number.  */

function dec_to_bho(a, b){
    if( b === 'B'){console.log(a.toString(2))}
    if( b === 'B'){console.log(a.toString(16))}
    if( b === 'B'){console.log(a.toString(8))}
    }
    dec_to_bho(120,'B');

/*  4. Write a JavaScript function to generate a random integer.  */

rand = function(min, max) {
    if (min==null && max==null)
      return 0;    
    
    if (max == null) {
        max = min;
        min = 0;
      }
      return min + Math.floor(Math.random() * (max - min + 1));
    };

   console.log(rand(20,1));
   console.log(rand(1,10));
   console.log(rand(6));
   console.log(rand());

/* 5. Write a JavaScript function to format a number up to specified decimal places.  */

function decimals(n, d) {
    if ((typeof n !== 'number') || (typeof d !== 'number'))
      return false;
           n = parseFloat(n) || 0;
       return n.toFixed(d);
       }

   console.log(decimals(2.100212, 2));
   console.log(decimals(2.100212, 3));
   console.log(decimals(2100, 2));

/* 6. Write a JavaScript function to find the highest value in an array.  */

function max(input) {
    if (toString.call(input) !== "[object Array]")  
      return false;
 return Math.max.apply(null, input);
   }

console.log(max([12,34,56,1]));
console.log(max([-12,-34,0,-56,-1]));


/* 7. Write a JavaScript function to find the lowest value in an array.  */

function lowest(input) {
    if (toString.call(input) !== "[object Array]")  
      return false;
 return Math.min.apply(null, input);
   }

console.log(min([12,34,56,1]));
console.log(min([-12,-34,0,-56,-1]));
}
/* 8. Write a JavaScript function to find the GCD (greatest common divisor) of more than 2 integers.  */

function gcd_more_than_two_numbers(x, y){
    if(!y) return y === 0 ? x : NaN;
    return gcd_more_than_two_numbers(y, x % y);
    }
    
    function gcd(arr){
    var n = 0;
    for( var i = 0; i < arr.length; i++){
    n = gcd_more_than_two_numbers(arr[i], n);
    return n;
    }
    }
    console.log(gcd([3,15,27]));
    console.log(gcd([5,10,15,25]));
    
/* 9. Write a JavaScript function to get the least common multiple (LCM) of more than 2 integers.  */
