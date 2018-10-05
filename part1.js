## LAB TEST 3

/* 1. Write a JavaScript function to check whether an `input` is an array or not.  */

function is_array(input) {
    if (toString.call(input) === "[object Array]") {
      return true;
    } else {
      return false;
    }
  }
  
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));


  /* 2. Write a JavaScript function to clone an array.  */

function cloneArray(array) {
    let newArray = Array.from(array);
    return newArray;
  }

console.log(cloneArray([1,2,4,0]));
console.log(cloneArray([1, 2, [4, 0]]));

  /* 3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.  */

function first(arr, n){
    if(n == null) return arr[0];
    if(arr == null) return [];
    if(n < 0) return [];
    var result = arr.slice(0, n);
    return result;
    }

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

/* 4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.  */

    function last(arr, n){
        if(n == null) return arr.slice(-1);
        var result = arr.slice(-n);
        return result;
        }

    console.log(last([7, 9, 0, -2]));
    console.log(last([7, 9, 0, -2],3));
    console.log(last([7, 9, 0, -2],6));


/* 5. Write a simple JavaScript program to join all elements of the following array into a string.  */

    myColor = ["Red", "Green", "White", "Black"];

        console.log(myColor.toString());
        console.log(myColor.join());
        console.log(myColor.join('+'));


/* 6. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.  */

/* 7. Write a JavaScript program to sort the items of an array.  */

     var array = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ].sort();
        console.log(array);

        function mostFrequent(array){
          var result = array[0];
          var tmp = 0;
          for(var i = 0; i < array.length; i++){
            var count = 0;
            for(var j = 0; j < array.length; j++){
              if(array[i]===array[j]){
                count++;
              }
            }
            if(count > tmp){
              tmp = count;
              result = array[i];
            }
          }
          return result;
        }
        
        console.log(mostFrequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));