"use strict";

// 編碼練習 1： Frequency Counter - validAnagram
// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
// function validAnagram(str1, str2) {
//   if (str1.length !== str2.length) return false;

//   let obj1 = {};
//   let obj2 = {};

//   for (let cha of str1) {
//     if (!obj1[cha]) {
//       obj1[cha] = 1;
//     } else {
//       obj1[cha] += 1;
//     }
//   }

//   for (let cha of str2) {
//     if (!obj2[cha]) {
//       obj2[cha] = 1;
//     } else {
//       obj2[cha] += 1;
//     }
//   }

//   for (let key in obj1) {
//     if (!(key in obj2)) return false;

//     if (obj1[key] !== obj2[key]) return false;
//   }

//   return true;
// }

// console.log(validAnagram("common", "moncom"));

// 編碼練習 2： Multiple Pointers - countUniqueValues
// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
// function countUniqueValues(arr) {
//   if (arr.length === 0) return 0;
//   let i = 0;
//   for (let j = 1; j < arr.length; j++) {
//     if (arr[i] !== arr[j]) {
//       i++;
//       arr[i] = arr[j];
//     }
//   }
//   return i + 1;
// }

// console.log(countUniqueValues([1, 1, 2, 3, 3, 3, 4, 5, 5, 5, 5, 6, 7, 7]));
// [1, 2, 3, 4, 5, 6, 7, 5, 5, 5, 5, 6, 7, 7];

// 編碼練習 3： Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
// function sameFrequency(num1, num2) {
//   const arr1 = num1.toString().split("");
//   const arr2 = num2.toString().split("");
//   if (arr1.length !== arr2.length) return false;
//   const obj1 = {};
//   const obj2 = {};

//   for (let i = 0; i < arr1.length; i++) {
//     if (!obj1[arr1[i]]) {
//       obj1[arr1[i]] = 1;
//     } else {
//       obj1[arr1[i]]++;
//     }
//   }

//   for (let i = 0; i < arr2.length; i++) {
//     if (!obj2[arr2[i]]) {
//       obj2[arr2[i]] = 1;
//     } else {
//       obj2[arr2[i]]++;
//     }
//   }

//   for (let key in obj1) {
//     if (!(key in obj2)) return false;
//     if (obj1[key] !== obj2[key]) return false;
//   }
//   return true;
// }

// console.log(sameFrequency(182, 281));

// 編碼練習 4： Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.
// function areThereDuplicates(...data) {
//   const arr = data;
//   const obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (!obj[arr[i]]) {
//       obj[arr[i]] = 1;
//     } else {
//       obj[arr[i]]++;
//     }
//   }
//   console.log(obj);
//   for (let key in obj) {
//     if (obj[key] > 1) return true;
//   }
//   return false;
// }

// console.log(areThereDuplicates(1, 2, 3, 5, 5));

// 編碼練習 5： Multiple Pointers - averagePair
// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
// function averagePair(arr, ave) {
//   let i = 0;
//   let j = arr.length - 1;
//   while (i < j) {
//     if ((arr[i] + arr[j]) / 2 === ave) {
//       return true;
//     } else if ((arr[i] + arr[j]) / 2 > ave) {
//       j--;
//     } else {
//       i++;
//     }
//   }
//   return false;
// }

// 編碼練習 6： Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
// function isSubsequence(target, origin) {
//   let i = 0;
//   let j = 0;
//   while (i < target.length) {
//     if (target[i] === origin[j]) {
//       console.log(i, j);
//       i++;
//       j++;
//     } else {
//       j++;
//     }
//   }
//   console.log(i);
//   if (i === target.length) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isSubsequence("hello", "hello world"));

// 編碼練習 7： Sliding Window - maxSubarraySum
// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function. Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
// function maxSubarraySum(arr, num) {
//   let temp = 0;
//   let max = 0;
//   if(arr.length < num) return null;
//   for (let i = 0; i < num; i++) {
//     max += arr[i];
//   }
//   temp = max;

//   for (let i = num; i < arr.length; i++) {
//     temp = temp - arr[i - num] + arr[i];
//     max = Math.max(temp, max);
//   }
//   return max;
// }
// console.log(maxSubarraySum([100, 200, 300, 400], 2));

// 編碼練習 10： power
// function power(base, expo) {
//   if (expo === 0) return 1;
//   return base * power(base, expo - 1);
// }
// console.log(power(2, 4));

// 編碼練習 11： factorial
// Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.
// function factorial(num) {
//   if (num < 1) return 1;
//   return num * factorial(num - 1);
// }
// console.log(factorial(7));

// 編碼練習 12： productOfArray
// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
// function productOfArray(arr) {
//   if (arr.length === 0) return 1;
//   return arr[0] * productOfArray(arr.slice(1));
// }
// console.log(productOfArray([1, 2, 3, 4]));

// 編碼練習 24： Linear Search Exercise
// Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists. If the value does not exist in the array, return -1. Don't use indexOf to implement this function!
// function linearSearch(arr, t) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === t) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(linearSearch([10, 15, 20, 25, 30], 15));

// 編碼練習 25： Binary Search Exercise
// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.
// function binarySearch(arr, t) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     let mid = Math.floor((left + right) / 2);
//     if (arr[mid] === t) {
//       return mid;
//     }
//     if (t > arr[mid]) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   if (left === right && arr[left] === t) {
//     return left;
//   }
//   return -1;
// }
