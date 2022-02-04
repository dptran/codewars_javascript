function solution(string) {
    var sentence = "";
    
    var arr = string.match(/[A-Z]/g);
  console.log(arr);
  
  if (arr == null) {
    return string;
  } else {
    let x = 0;
    for ( i in arr ) {
      console.log(x);
      let j = string.indexOf(arr[i], x+1);
      console.log(j);
      let y = string.slice(x, j);
      sentence += y + " ";
      x = j;
    }
    sentence += string.slice(x);
    return sentence;
    }
    
}