# _Mr Robogers Neighborhood_

#### By _**Tim Empey**_

#### _This webpage will take any number inputed and convert it to a string_

## Technologies Used

* _JavaScript_
* _HTML_
* _CSS_
* _Bootstrap_

## Description

_The webpage will take any positive numeric value and convert it to a string. Replacing any number that includes a 1, 2 or 3 and replace them with 'Beep!', 'Boop!, and 'Won't you be my neighbor!' correspondingly. While this is running it prioritizes the indicating number from 3-2-1 in that order._

## Setup/Installation Requirements

* _Open up your terminal and navigate to the desired landing folder_
* _In terminal enter, ' "git clone https://github.com/TimEmpey/Progamming-suggester '_
* _In terminal enter 'code .' to open files in Visual Studio Code_
* _In Visual Code Studio select the 'Go Live' option on the bottom task bar_

## Known Bugs

* _Entering a negative number will give no response_

<details>
<summary>Tests</summary>
  Describe: beepBoop()

Test 1: Should return inputed number as an array
<br>
Code: 
<br>
const number = 8
<br>
beepBoop(number);
<br>
Expected Output: [8]
<br>

Test 2: Should return array from 0-inputed number
<br>
Code:
<br>
const number = 8
<br>
beepBoop(number);
<br>
Expected Output: [0, 1, 2, 3, 4, 5, 6, 7, 8]
<br>

Test 3: Should return array from 0-input but mark values containing 1,2, or 3 as pass, pass1, pass2
<br>
Code:
<br>
const number = 8
<br>
beepBoop(number);
<br>
Expected Output: [0, 1, 2, 3, 4, 5, 6, 7, 8]
<br>
'pass1' 'pass2' 'pass3'
<br>
</details>

## License

_[MIT](https://en.wikipedia.org/wiki/MIT_License)_

Copyright (c) _2022_ _Timohy Empey_