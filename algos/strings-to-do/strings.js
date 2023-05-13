//removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
function removeBlanks(string) {
    let newString = '';
  
    for (let i = 0; i < string.length; i++) {
      if (string[i] !== ' ') {
        newString += string[i];
      }
    }
  
    return newString;
  }
  
  //console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));









  //getDigits("abc8c0d1ngd0j0!8") => 801008
  function getDigits(string){
    let newNumString = '';

    for(let char in string){
        if(!isNaN(string[char])){
            newNumString += string[char]
           
        }
    }
return Number(newNumString)

  }
 //console.log(getDigits("abc8c0d1ngd0j0!8"))










 //acronym(" there's no free lunch - gotta pay yer way. ") => "TNFL-GPYW". 
 function acronym(string) {
    let wordsArr = string.split(' ');
    let acronym = '';
  
    for (let i = 0; i < wordsArr.length; i++) {
      if (wordsArr[i].length > 0) {
        acronym += wordsArr[i][0].toUpperCase();
      }
    }
  
    return acronym;
  }
  
 //console.log(acronym("there's no free lunch - gotta pay yer way."));











 //countNonSpaces("Honey pie, you are driving me crazy") => 29
 function countNonSpaces(string){
    let counter = 0;

    for(let char in string) {
        if(string[char] !=' '){
            counter++
        }
    }
    return counter
 }
 //console.log(countNonSpaces("Honey pie, you are driving me crazy"))












 //removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
 function removeShorterStrings(arr,len){
    let newString = []
    let nextIndex = 0

    for(let value in arr){
        if(arr[value].length >= len){
            newString[nextIndex++]= arr[value]
        }
    }
    return newString
 }
 console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4))