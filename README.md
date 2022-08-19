Describe: beepBoop()

Test: Should return inputed number as an array
Code: 
const number = 8
beepBoop(number);
Expected Output: [8]

Test: Should return array from 0-inputed number
Code:
const number = 8
beepBoop(number);
Expected Output: [0, 1, 2, 3, 4, 5, 6, 7, 8]

Test: Should return array from 0-input but mark values containing 1,2, or 3 as pass, pass1, pass2
Code
const number = 8
beepBoop(number);
Expected Output: 
[0, 1, 2, 3, 4, 5, 6, 7, 8]
'pass1' 'pass2' 'pass3'