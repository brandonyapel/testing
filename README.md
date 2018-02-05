# Welcome to Unit Testing!

Using `mocha` and `chai` as we did in lecture, you're going to practice both writing tests and fixing code to match unit tests.

[- Mocha Docs](https://mochajs.org/#getting-started)
- [Chai Docs](http://chaijs.com/api/)

## Fix OddEven Module to Pass Tests

Run the tests for the OddEven module. Notice it isn't passing the tests. 

Change the `CODE` to pass the `TESTS`. Do not change the tests for this base part. 

Can you think of any other tests this unit should have? If so, try writing them.


## Write and Test a Module 

Pick one of these functions from last week and implement it in javascript inside of a module. Write unit tests for this module. It's best practice to start with the tests but you can do it either way.

1. Write a function that takes in two arguments, an array of strings and a string. The function should return the number of times the string is found in the array. Exact matches only.

> [‘apple’, ‘pizza’, ‘orange’, ‘apple’, ‘sour apple’] and ‘apple’ would return 2.

2. Write a function that takes in an array of strings and returns true if any string occurs twice, otherwise false.

> [‘green’, ‘red’, ‘blue’] would return false.
> [‘green’, ‘red’, ‘green’] would return true.


## Hard Mode

Now do the other one :)


## Pro Mode

Copy the `oddEven` module into a new module called `howManyEvenAndOdd`. 

Change the function to take in an array of numbers. The function should return an object with the counts of odd and even numbers in the array.

Something like this:

```javascript
return {
  oddCount: 4,
  evenCount: 1
};
```

Write unit tests for this new module. 
