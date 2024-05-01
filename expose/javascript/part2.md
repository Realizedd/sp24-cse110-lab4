1. ^^^ What will happen at line 12 and why? If the code causes an error, explain why. ^^^

It will print 3 since i is a var and has function scope.

2. ^^^ What will happen at line 13 and why? If the code causes an error, explain why. ^^^

It will print 150 since discountedPrice is a var and has function scope.

3. ^^^ What will happen at line 14 and why? If the code causes an error, explain why. ^^^

It will print 150 since finalPrice is a var, so it is accessible from function scope where the console.log lies.

4. ^^^ What will this function return? Give a brief explanation why. If the code causes an error, explain why. ^^^

[ 50, 100, 150 ] - An array containing the 50% discounted prices of the origial, because the discounted array is accessible from the function scope.

5. ^^^ What will happen at line 12 and why?  If the code causes an error, explain why. ^^^ (assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)).

It will throw an error since i is not defined in the scope of line 12.

6. ^^^ What will happen at line 13 and why? If the code causes an error, explain why. ^^^

It will throw an error since discountedPrice is not defined in the scope of line 13.

7. ^^^ What will happen at line 14 and why? If the code causes an error, explain why. ^^^

It will correctly print 150 since finalPrice is defined in the scope of line 14.

8. ^^^ What will this function return? Give a brief explanation. If the code causes an error, explain why. ^^^

[ 50, 100, 150 ] - An array containing the 50% discounted prices of the origial, because the discounted array is accessible from the function scope.

9. ^^^ What will happen at line 11 and why? If the code causes an error, explain why. ^^^

It will error since const has the same scope as let: block scope.

10. ^^^ What will happen at line 12 and why? If the code causes an error, explain why. ^^^

It will print 3 since length is defined in the same scope as line 12.

11. ^^^ What will this function return? Give a brief explanation. If the code causes an error, explain why. ^^^

[ 50, 100, 150 ] - An array containing the 50% discounted prices of the origial, because the discounted array is accessible from the function scope.

12. Given the above Object, write the notation for:  (These should be in your part2.md)

    - Accessing the value of the name property in the student object: `student['name']`
    - Accessing the value of the Grad Year property in the student object: `student['Grad Year']`
    - Calling the function for the greeting property in the student object: `student.greeting();`
    - Accessing the name property of the object in the Favorite Teacher property in student: `student['Favorite Teacher']['name']`
    - Access index zero in the array of the courseLoad property of the student object: `student['courseLoad'][0]`

13.  Arithmetic
     - '3' + 2: '32' since 2 converts to '2'
     - '3' - 2: 1 since '3' converts to 3
     - 3 + null: 3 since null converts to 0
     - '3' + null: '3null' since null converts to 'null'
     - true + 3: 4 since true converts to 1
     - false + null: 0 since both false and null converts to 0
     - '3' + undefined: '3undefined' since undefined converts to 'undefined'
     - '3' - undefined: NaN since '3' converts to 3 but undefined converts to NaN

14.  Comparison
     - '2' > 1: true since '2' converts to 2 and 2 > 1
     - '2' < '12': false since '1' < '2' in lexicographic order
     - 2 == '2': true since '2' converts to 2
     - 2 === '2': false since === is strict equivalence and performs no type conversion
     - true == 2: false since true converts to 1
     - true === Boolean(2): true since Boolean(n > 0) converts to true

15.  Explain the difference between the == and === operators.

=== does not perform a type check whereas == does.

17.  If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result. (This should be in your part2.md). Here we are passing in a function as a parameter, however we can also return a function from another function just as easily, you're encouraged to play around with callbacks as they are used heavily in frontend JS development.
 
The result will be [1, 2, 3, 2, 4, 6] because in modifyArray, we go through each index and apply the function passed in as callback to the value at index. Then, the value returned from the callback function is then pushed at the end of the array. Since doSomething, a function that multiplies a given number by 2, is passed in as callback when calling modifyArray, the array will become [1, 2, 3, 2, 4, 6].

19.  What is the output of the above code? (This should be in your part2.md)

1
4
2
3

