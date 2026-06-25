/* 
value 'number' has type string 
value 3 has type number
when the one of the values of the expression is a string 
and the second is a number 
the number transforms to a string
and the operator + applies as a concatenator
which returns the output 'number33'
*/
'number' + 3 + 3; // result -> 'number33'

/* 
null transforms to 0
addition of 0 and 3 returns the output 3
*/
null + 3; // result -> 3

/*
5 is a number
"qwerty" is a string
the expression with logical operator AND 
which contains the number at first place
and the string at the last place  
the string "qwerty" will be returned in the output
*/
5 && "qwerty"; // result -> "qwerty"

/*
string +'40' transforms to number 40
the same string +'2' transforms to a number type
then applies addition of 40 and 2 with output 42
the next number 42 concatenates with string 'hillel' 
and returns the string '42hillel'
*/
+'40' + +'2' + "hillel"; // result -> '42hillel'

/*
string '10' transforms to number due to difference operator
the result of difference between 10 and 5 is 5
strict equality between 5 and 6 returns the output of false
*/
'10' - 5 === 6; // result -> false

/*
due to addition operator true transforms to 1
and false transforms to 0
the additions of number 1 and 0 returns 1
*/
true + false; // result -> 1

/*
due to operator of difference js tries to transform string '4px' to a number 
that returns the output of NaN (Not-a-Number)
*/
'4px' - 3; // result -> NaN

/*
due to operator of difference js transforms the string '4' to a number
then applies difference between 4 and 3
which returns the output of 1
*/
'4' - 3; // result -> 1

/*
3 ** 0 returns the result 1 -> number 3 to the power of the 0
string '6' concatenates with number 1
and returns the result of string '61'
*/

'6' + 3 ** 0; // result -> '61'

/*
due to math operator division, string '6' transforms to number
the division of 12 and 6 returns number 2
*/
12 / '6'; // result -> 2

/*
at first 5 strictly compares with 6 which returns false
then string '10' concatenates with false
which returns string '10false'
*/

'10' + (5 === 6); // result -> '10false'

/*
null is nothing, no value, and '' is something, but empty value
comparison null and '' returns false
*/
null == ''; // result -> false

/*
division of 9 and 3 returns 3
raising 3 to the power of 3 returns 27
*/
3 ** (9 / 3); // result -> 27

/*
'false' and 'true' both have a string type
logical NOT operator ! which applied 2 times to a string value returns true
equality between true and true returns true
*/
!!'false' == !!'true'; // result -> true

/*
0 || '0' -> operator OR tries to convert 0 (expr1) to true and returns '0'
'0' && 1 -> operator AND tries to convert '0' (expr1) to false and returns 1 (expr2)
according to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#logical_operators
*/
0 || '0' && 1; // result -> 1

/*
+null converts to 0
not strict equality between 0 and false (0) returns true
true converts to 1
the expression 1 < 1 returns false
*/
(+null == false) < 1; // result -> false

/*
operator AND tries to convert false (expr1) to false and returns false
operator OR tries to convert false (expr1) to true and returns true (expr2)
*/
false && true || true; // result -> true

/*
operator OR tries to convert false (expr1) to true and returns true (expr2)
operator AND tries to convert false (expr1) to false and returns false
*/
false && (false || true); // result -> false

/*
+null converts to 0
not strict equality between 0 and false (0) returns true
number 1 to the power of 5 returns 1
comparison 1 < 1 returns false
*/
(+null == false) < 1 ** 5; // result -> false
