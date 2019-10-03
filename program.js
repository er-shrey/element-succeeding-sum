//var inputArray = [36, 2, 17, 6, 6, 5];
var inputArray = [7, 25, 17, 7];
var currentSum = 0;
var outPutArray = [];
for(let i = inputArray.length-1; i >= 0; i--){
  if(inputArray[i] == currentSum){
    outPutArray.push(i);
    currentSum += inputArray[i];
  }
  else{
    currentSum += inputArray[i];
  }
}

if(outPutArray.length>0){
  console.log(outPutArray.reverse());
}
else{
  console.log("-1");
}

