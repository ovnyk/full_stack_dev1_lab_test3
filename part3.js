/* 1. Write a JavaScript function to check whether an `input` is a string or not.  */

function is_string(str) {
    return typeof str === 'string';
}

console.log(is_string('w3resource')); 
console.log(is_string([1, 2, 4, 0])); 

/* 2. Write a JavaScript function to check whether a string is blank or not.  */

function is_Blank (string) {
    if (string === " ") return true;
    else return false;
    }

console.log(is_Blank(' '));
console.log(is_Blank('abc'));

/* 3. Write a JavaScript function to split a string and convert it into an array of words.  */

string_to_array = function (str) {
    return str.trim().split(" ");
}

console.log(string_to_array("Robin Singh"));


/* 4. Write a JavaScript function to extract a specified number of characters from a string.  */

function truncate_string (str, nr) {
    return str.substr(0, nr);
    }

console.log(truncate_string("Robin Singh",4));

/* 5. Write a JavaScript function to convert a string in abbreviated form.  */

function abbrev_name (str) {
    var r = str.split(" ");
    var res = r[1];
    res = res.substring(0,1);
    return r[0] + " " + res + ".";
    }

console.log(abbrev_name("Robin Singh"));

/* 6. Write a JavaScript function to hide email addresses to protect from unauthorized user.  */

function protect_email (str) {
    var before = str.split('_');
    var after = str.split('@');
    return before[0] + '...' + '@' + after[1];
    }

console.log(protect_email("robin_singh@example.com"));

/* 7. Write a JavaScript function to capitalize the first letter of each word in a string.  */

function capitalize(str) {
    return str.split(' ').map(str => str[0].toUpperCase() + str.slice(1)).join(' ');
  }
  
console.log(capitalize('js string exercises'));