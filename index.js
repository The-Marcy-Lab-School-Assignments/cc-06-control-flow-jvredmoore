//1
function sumOfThreeAndFive(){
 let sum = 0
 for(let i = 0; i < 1000; i++){
     if(1 % 3 === 0 || 1 % 5 === 0){
        sum += i 
     }
 } 
 return sum
}

console.log(sumOfThreeAndFive())

function greaterNum(num1, num2){
  if(num1 === num2){
      return "both integers are equal"
  }else if(num1 > num2){
      return num1
  }else if(num2 > num1){
      return num2
  }else{
      return null
  }
}

console.log(greaterNum("10", 10))

function oddAndEvenInFifteen(){
  
}

function sortThreeNums(){
  
}






