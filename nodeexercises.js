//exercise basic - 1
function countWords(str){
   let count = 0;
   words = str.split(" ");
    for (i=0 ; i < words.length ; i++){
       if (words[i] != "")
          count += 1;
    }
    return count;
}

//exercise basic - 2
let array = [1,2,3,4,5,6];
let val = array[array.length - 1];

//exercise basic - 3
function isEven(value){
  let value = 5;
    if (value%2 == 0)
        return true;
    else
        return false;
}

//exercise basic - 4
function reverseName(string) {
    let array = string.split(" ");
    return array[1]+" "+array[0];
  }
    console.log(reverseName("Alex Thain"));

//exercise basic - 5
function alphabetOrder(string) {
    return string.split('').sort().join('');
  }
console.log(alphabetOrder("thainosthemaster"));

//exercise basic - 6
console.log(Math.min(7, 8, 10, 22, 2, 3, 1)); //built in js function

//exercise intermediate - 1
const namesDup = ['Bert', 'Roger', 'Bert', 'Micah', 'Pete', 'Bert'];
let uniqueSort = [new Set(namesDup)];
console.log(uniqueSort);

//exercise intermediate - 2
let positions = ['3', '45', '43', '12', '67', '2'];

function numberDes(a,b) {
   return b-a;
 }
 positions.sort(numberDes);
  console.log(positions);

//exercise intermediate - 3
function emailVerify(input) {

}

//exercise intermediate - 4
function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}
