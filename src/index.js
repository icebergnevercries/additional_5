module.exports = function check(str, bracketsConfig) {
  const massOpenElem = [], massCloseElem = [];
  let massOpenElemCount = [], massCloseElemCount = [];
  const pairedBracketsCount = bracketsConfig.length;

  for(let i = 0; i < pairedBracketsCount; i++)
  {
    massOpenElem.push(bracketsConfig[i][0]);
    massCloseElem.push(bracketsConfig[i][1]);

    massOpenElemCount.push(0);
    massCloseElemCount.push(0);  
  }  

  let massBrackOpNow = [];
  for(let i = 0, lenstr = str.length; i < lenstr; i++){
    for(let j = 0; j < pairedBracketsCount; j++){
      if(str[i] == massOpenElem[j] && str[i] == massCloseElem[j]){
        if(massOpenElemCount[j] == massCloseElemCount[j]){
          massOpenElemCount[j]++;
          massBrackOpNow.push(massOpenElem[j]);
        }
        else{
          massCloseElemCount[j]++;
          if(massBrackOpNow[massBrackOpNow.length - 1] == massOpenElem[j]){
            massBrackOpNow.pop();
          }
          else{
            return false;
          }    
        }
      }
      else if(str[i] == massOpenElem[j]){
        massOpenElemCount[j] += 1;
        massBrackOpNow.push(massOpenElem[j]);
      }
      else if(str[i] == massCloseElem[j]){
        massCloseElemCount[j] += 1;     
        if(massBrackOpNow[massBrackOpNow.length - 1] == massOpenElem[j]){
          massBrackOpNow.pop();
        }
        else{
          return false;
        }
      }
    }
  }

  for(let i = 0; i < pairedBracketsCount; i++)
  {
    if(massOpenElemCount[i] != massCloseElemCount[i]){
      return false;
    }
  }

  return true;
}
