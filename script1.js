//ANONYMOUS AND IIFE
//1.ODD NUMBERS
var odd=function(arr){
    let odds = arr.filter(n => n%2);
    return odds;
    }
    console.log(odd([2,4,6,4,7,1]));
// IIFE
(function odd(arr){
    let odds = arr.filter(n => n%2);
    console.log(odds);
})([2,4,6,4,7,1]);

//2.Title Case
var Titlecase=function(str){
    str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  return str.join(' ');
}
console.log(Titlecase("anonymous function"));
// IIFE
(function Titlecase(str){
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    console.log(str.join(' '));  
})("anonymous function");

//3. SUM 
var sum=function(arr){
    let sum=0;
    for(var i=0;i<arr.length;i++)
    sum+=arr[i];
    return sum;
}
console.log(sum([2,52,7,6,4]));
//IIFE
(function sum(arr){
    let sum=0;
    for(var i=0;i<arr.length;i++)
    sum+=arr[i];
    console.log(sum); 
})(2,5,7,6,44,7);

//PRIME NUMBERS
const arr=[2,5,8,9,4,3];
var prime=function(num){
    for (let start = 2; num > start; start++) {
        if (num % start == 0) {
          return false;
        }
      }
      return num > 1;
    }
console.log(arr.filter(prime));
// IIFE
(function prime(num){
    for (let start = 2; num > start; start++) {
        if (num % start == 0) {
          return false;
        }
      }
      return num > 1;  
})

//PALINDROME
const array = ['carecar', 1344, 12321, 'did', 'cannot'];
var PALINDROME=function(str){
const isPalindrome = el => {
   const str = String(el);
   let i = 0;
   let j = str.length - 1;
   while(i < j) {
      if(str[i] === str[j]) {
         i++;
         j--;
      }
      else {
         return false;
      }
   }
   return true;
};

 {
   return array.filter(el => isPalindrome(el));
};
}
console.log(PALINDROME(array));

//MEDIAN
function getMedian(arr1, arr2, n)
{
    var i = 0; 
    var j = 0; 
    var m1 = -1, m2 = -1;
     for (count = 0; count <= n; count++)
    {
        
        
        if (i == n)
        {
            m1 = m2;
            m2 = arr2[0];
            break;
        }
 
        
        else if (j == n)
        {
            m1 = m2;
            m2 = arr1[0];
            break;
        }
        
        if (arr1[i] <= arr2[j])
        {
            m1 = m2; 
            m2 = arr1[i];
            i++;
        }
        else
        {
            m1 = m2; 
            m2 = arr2[j];
            j++;
        }
    }
 
    return (m1 + m2)/2;
}


// ROTATE AN ARRAY
function rotate(array,k) {

    for (var i = 0; i < k; i++) {
        array.unshift(array.pop());
    }

    return array;
}
console.log(rotate([2,4,3,6,4,7,],2));
// IIFE
(function rotate(array,k){
    for (var i = 0; i < k; i++) {
        array.unshift(array.pop());
    }

    console.log(array);
})([2,4,3,6,4,7,],2);


//ARROW FUNCTIONS
//(1)
var odd=(arr)=>{
    let odds = arr.filter(n => n%2);
    return odds;
    }
    console.log(odd([2,4,6,4,7,1]));

//(2)
var Titlecase=(str)=>{
    str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  return str.join(' ');
}
console.log(Titlecase("anonymous function"));

//(3)
var sum=(arr)=>{
    let sum=0;
    for(var i=0;i<arr.length;i++)
    sum+=arr[i];
    return sum;
}
console.log(sum([2,52,7,6,4]));

//(4)
const array1=[2,5,8,9,4,3];
var prime=(num)=>{
    for (let start = 2; num > start; start++) {
        if (num % start == 0) {
          return false;
        }
      }
      return num > 1;
    }
console.log(array1.filter(prime));

//(5)
const array2 = ['carecar', 1344, 12321, 'did', 'cannot'];
var PALINDROME=(str)=>{
const isPalindrome = el => {
   const str = String(el);
   let i = 0;
   let j = str.length - 1;
   while(i < j) {
      if(str[i] === str[j]) {
         i++;
         j--;
      }
      else {
         return false;
      }
   }
   return true;
};

 {
   return array.filter(el => isPalindrome(el));
};
}
console.log(PALINDROME(array2));

