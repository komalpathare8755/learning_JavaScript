//1.Create a varibale name (firstFavNum) and store your favourte number
//2.Create Variable name (secondFavNum) and store your second fav number.
//3. Add (firstFaavNum & secondFavNum)
//4. Multipy (firstFaavNum & secondFavNum)
//5. Divided (firstFaavNum & secondFavNum)
//6. check (firstFaavNum Mod secondFavNum)
//7. SUbstract (firstFaavNum & secondFavNum)
//8. CHeck the power of (firstFavNum)

let firstFavNum = 11;
console.log(firstFavNum);

let secondFavNum = 7;
console.log(secondFavNum);

addition = firstFavNum + secondFavNum;
console.log(addition);

Sub = firstFavNum - secondFavNum;
console.log(Sub);

Mult = firstFavNum * secondFavNum;
console.log(Mult);

Div = firstFavNum / secondFavNum;
console.log();

Check = firstFavNum % secondFavNum;
console.log(Check);

for (let i = 1; i <= 2; i++) {
  let variableName = `num${i}`;
  let variableValue = window[variableName]; // Access the variable using its name

  console.log(`Value of ${variableName}: ${variableValue}`);
}
