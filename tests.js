QUnit.config.reorder = false;

QUnit.test("example",
    function(assert) {
        assert.ok(
            typeof example === "function",
            "Create an example function that returns true.  NB: We have provided the solution to this in index.js, so you can see a working test."
        );
        assert.strictEqual(
            example(), true
        );
    }
);


QUnit.test("addFunction",
    function(assert) {
        assert.ok(
            typeof add === "function",
            "Create an add function that accepts two parameters and returns their sum."
        );
        assert.strictEqual(
            add(7, 17), 24
        );
        assert.strictEqual(
            add(-7, -17), -24
        );
        assert.ok(
            add(.1, .2) > .299999
        );
    }
);





QUnit.test("subtractFunction",
    function(assert) {
        assert.ok(
            typeof subtract === "function",
            "Create a subtract function that accepts two parameters and takes the second parameter from the first."
        );
        assert.strictEqual(
            subtract(10, 5), 5
        );
        assert.ok(
            subtract(5, 10) == -5
        );
        assert.ok(
            subtract(Infinity, 32) == Infinity
        );
    }
);

QUnit.test("addArrayFunction",
    function(assert) {
        assert.ok(
            typeof addArray === "function",
            "Create an addArray function that accepts one parameter, an array and returns the sum of the values contained within it."
        );
        assert.strictEqual( addArray( [1,2]), 3 );
        assert.strictEqual( addArray( [1,1,1]), 3 );
        assert.strictEqual( addArray( [1,10,100]), 111 );
        assert.strictEqual( addArray( [-2,-4,-1]), -7 );
        assert.strictEqual( addArray( [-2,-1,0,1,2]), 0 );
        assert.strictEqual( addArray( []), 0 );
        assert.strictEqual( addArray( [1]), 1 );
        assert.strictEqual( addArray( [1, 1]), 2 );
        assert.strictEqual( addArray( [1, 2, 3, 4, 5]), 15 );
        assert.strictEqual( addArray( [1.1, 1.2, 1.3, 1.5]), 5.1 );
        assert.strictEqual( addArray( [-100, -200, -300]), -600 );
        assert.strictEqual( addArray( [-200, 400]), 200 );
    }
);


QUnit.test("avgArray",
    function(assert) {
        assert.ok(
            typeof avgArray === "function",
            "Create an avgArray function that accepts one parameter, an array and returns its average."
        );

        assert.ok(
            avgArray([1,1,1]) === 1,
            "The average of an array with three ones is one."
        );

        assert.ok(
            avgArray([1,2,3]) === 2,
            "The average of an array with one, two and three is two."
        );

        assert.ok(
            avgArray([10,10,10]) === 10,
            "The average shoudl be 10."
        );

        assert.ok(
            avgArray([10,20,30,40,50]) === 30,
            "The average shoudl be 30."
        );

        assert.ok(
            avgArray([]) === 0,
            "The average of an empty array is 0."
        );


    }
);



QUnit.test("compare",
    function(assert) {
        assert.ok(
            typeof compare === "function",
            "Create a function called compare that accepts two arrays of numbers and compares the contents.  It should return true if the arrays are identical and false otherwise."
        );

        assert.ok(
            compare([1], [1]),
            "two arrays with 1, should pass"
        );

        assert.ok(
            compare([1, 2, 3], [1, 2, 3]),
            "two identical arrays, should pass"
        );

        assert.ok(
            compare([4, 7, 11, 17], [4, 7, 11, 17]),
            "two arrays, for idential elements each, should pass"
        );

        assert.notOk(
            compare([1, 2], [2, 1]),
            "expect to return false because 1!=2 and 2!=1"
        );

        assert.notOk(
            compare([4, 7, 11, 17], [109]),
            "totally false"
        );

        assert.notOk(
            compare([1, 2, 3], [1, 4, 3]),
            "return false because more than just the first or last index should be compared."
        );
        
        assert.notOk(
          compare([4], [4, 7, 11, 17])
        );
    }
);


QUnit.test("nArray",
    function(assert) {
        assert.ok(
            typeof nArray === "function",
            "Write a function \"nArray\" that takes a parameter n and returns an array with n numbers. The numbers in the array should increase from 1 to n."
        );

        let array1 = nArray(3);
        let array2 = [1, 2, 3];

        assert.ok(
            compare(array1, array2)
        );

    }

);


QUnit.test("divisors",
    function(assert) {
        assert.ok(
            typeof divisors === "function",
            "Write a function \"divisors\" that takes takes two parameters, an array of numbers and a divisor.  Return a new array containing ONLY the numbers in the first array that are exactly divisible by the second parameter."
        );

        assert.ok(
            compare( divisors([1, 2, 3, 4, 5], 2), [2,4] ),
            "Given an array [1,2,3,4,5] and a second parameter of 2, the result should be [2,4]."
        );

        assert.ok(
            compare( divisors([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [3, 6, 9] ),
            "Given an array [1,2, ..., 9] and a second parameter of 3, the result should be [3,4]."
        );

    }
);


QUnit.test("multiples",
    function(assert) {
        assert.ok(
            typeof multiples === "function",
            "Write a function 'multiples' that takes two parameters n and m.  Your function should insert n numbers into an array.  The numbers inserted should increase from 1*m to n*m.  Your function should return the new array."
        );

        assert.ok(
            compare( multiples(2, 2), [2, 4]),
            "When n and m are 2 and 2, there should be two numbers in the resulting array, increasing by two each time, so [2, 4]."
        );

        assert.ok(
            compare(  multiples(9, 3), [3, 6, 9, 12, 15, 18, 21, 24, 27]),
            "When n and m are 9 and 3, there should be nine numbers in the resulting array, increasing by three each time, so [3, 6, 9, 12, 15, 18, 21, 24, 27]."
        );

    }
);




QUnit.test("larger",
    function(assert) {

        assert.ok(
            typeof larger === "function",
            "Create a function called larger that accepts two numbers and returns the larger number."
        );

        assert.strictEqual(larger(1, 2), 2);
        assert.strictEqual(larger(1, 2), 2);
        assert.strictEqual(larger(1, 3), 3);
        assert.strictEqual(larger(2, 2), 2);
        assert.strictEqual(larger(3, -5), 3);
        assert.strictEqual(larger(-3, 5), 5);
    }
);


QUnit.test("largest",
    function(assert) {

        assert.ok(
            typeof largest === "function",
            "Create a function called largest that accepts an array of numbers and returns the largest number in the array."
        );

        assert.strictEqual(largest([1, 2]), 2);
        assert.strictEqual(largest([0, 1, 2]), 2);
        assert.strictEqual(largest([1, 1, 3]), 3);
        assert.strictEqual(largest([2, 2, 2]), 2);
        assert.strictEqual(largest([1, 2, 3, 4, 5, 6, 7, 8, 3, -5]), 8);
        assert.strictEqual(largest([1]), 1);
    }
);




QUnit.test("addToAll",
    function(assert) {

        assert.ok(
            typeof addToAll === "function",
            "Create a function addToAll that accepts an array and a number as parameters.  Assuming an array of numbers is passed, return the same array with the second parameter added to each number within the array - such that ([1,2,3], 1) should return [2,3,4]."
        );

        assert.ok(
            compare(
                [2, 2],
                addToAll([1, 1], 1)
            )
        );

        assert.ok(
            compare(
                [55, 66, 77],
                addToAll([11, 22, 33], 44)
            )
        );
    }
);

