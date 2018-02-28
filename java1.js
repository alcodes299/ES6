// takes in array of peoples weights sorts them
// into two groups and gives you the weight of that group
function alternatingSums(a) {
    let weight1 = 0
    let weight2 =0
    let group1=[0]
    let group2=[0]
    for (var i=0;i<a.length; i++){
        if(i%2 == 1){
           group2.push(a[i])
           } else {
               group1.push(a[i])
           }
    }
    for (var i=0;i<group1.length;i++){
        weight1 += group1[i]
    }
    for (var i=0;i<group2.length;i++){
        weight2 += group2[i]
    }

    return [weight1, weight2]
}
// takes in any postive interger and returns true
// if the first half of the number is equal to the secound
//  else returns false
function isLucky(n) {
   var  x = []
     var y = []
    var  number1 = []
    var number2 =[]
    var sNum = n.toString()
    for (var i = 0; i < sNum.length; i++){
        if(i < sNum.length/2){
           x.push(sNum[i])
           } else{
                 y.push(sNum[i])
           }
    }
    for (var i=0;i<x.length;i++){
        console.log(Number(x[i]))
        number1.push(Number(x[i]))
        number2.push(Number(y[i]))
    }
    let total1 = 0
    let total2 = 0
    for(var i = 0; i < number1.length; i++){
        total1+= number1[i]
        total2+= number2[i]
    }
    if(total1 == total2){
       return true
       }else{
       return false
       }
}
// takes in an array of strings and returns
// only those that match the length of the longest string
function allLongestStrings(inputArray) {
    // return most length
    let longest = 0
    let newArray = []
    for (let i = 0; i < inputArray.length; i++){
        if(inputArray[i].length > longest){
           longest = inputArray[i].length
           }

    }
    for (let i = 0; i < inputArray.length; i++){
        if(inputArray[i].length == longest){
           newArray.push(inputArray[i])
           }
    }
        return newArray
}
// Given a sequence of integers as an array, determine whether it
// is possible to obtain a strictly increasing sequence by removing
// no more than one element from the array
function almostIncreasingSequence(seq) {
  var bad = 0
  for(var i=0;i<seq.length;i++) if(seq[i]<=seq[i-1]) {
    bad++
    if(bad>1) return false
    if(seq[i]<=seq[i-2]&&seq[i+1]<=seq[i-1]) return false
  }

  return bad
}

// centure to a year
function centuryFromYear(year) {
  if (year % 100==0){
    return year/100
  }
  else {
    return Math.floor(year/100 +1)

  }
}
