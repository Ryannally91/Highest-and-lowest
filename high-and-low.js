function highAndLow(numbers){
  let max= numbers[0];
  let min= numbers[0];
  numbers = numbers.split(' ')
  
  for(i=0; i < numbers.length; i++){
    numbers[i] = parseInt(numbers[i])
    if(numbers[i] > max){
      max = numbers[i]
    }
    if(numbers[i] < min){
      min = numbers[i]
    }
  }
 
//   max=max.toString()
//   min= min.toString()
 
  return max +' '+ min
  
}
