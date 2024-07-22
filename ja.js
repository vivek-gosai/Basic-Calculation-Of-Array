// const str = 'The quick brown fox jumps over the lazy dog.';

// const words = str.split(' ');
// console.log(words);

// const n2 = words.at(8);
// console.log(n2);

// const n1 = n2.split('');
// console.log(n1);

// const n3 = n1.reverse();
// console.log(n3);


// const n5 = n3.join('');
// console.log(n5);

// const n6 = n5.slice(1, 4);
// console.log(n6)

// const n = words.splice(0, 8);
// console.log(n);

// const n4 = n.join(' ');
// console.log(n4);

// console.log(n4.concat(' ', n6))


// question-1//

const a = ["red", "green", "white", "black"];

document.getElementById("print").innerHTML = a;

const b = a.join('+');
document.getElementById("print1").innerHTML = b;
console.log(b);

a.pop();
document.getElementById("print2").innerHTML = a;
const d = a.shift();
document.getElementById("print3").innerHTML = d;
document.getElementById("print4").innerHTML = a;
a.unshift('red');
a.push('black', 'orange');
document.getElementById("print5").innerHTML = a;


// question-2//

var e = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;

for (let i = 0; i < e.length; i++) {
    sum += e[i];
}
document.getElementById("print6").innerHTML = 'Your sum is :-' + sum;

//for each//

var f = 0;
e.forEach(function (element) {
    f += element;
})
document.getElementById("print7").innerHTML = 'Your sum is :-' + f;

// question-3//

function findMax(arr) {
    if (arr.length === 0) {
        return null;
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
function findMin(arr) {
    if (arr.length === 0) {
        return null;
    }
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

let array = [3, 1, 9, 4, 7, 2, 8, 5];
let MAX = findMax(array);
let MIN = findMin(array);
document.getElementById("print8").innerHTML = 'Your maximum is :-' + MAX;
document.getElementById("print9").innerHTML = 'Your minimum is :-' + MIN;



// question-4//

var arr = ['y', 'g', 'w', 'k'];

let asciiArray = [];


for (let i = 0; i < arr.length; i++) {

    let asciiValue = arr[i].charCodeAt(0);

    asciiArray.push(asciiValue);
    document.getElementById('print10').innerHTML = asciiValue;
}


// question-5//

var j = [-23, -20, -17, -12, -5, 0, 1, 5, 12, 19, 20];
const k = j.filter((word) => word > 0);
document.getElementById('print11').innerHTML ='positive numbers are;-'+ k;


// question-6//

var l = [2, 5, 6, 3, 8, 9];
const map1 = l.map((x) => x * x);
document.getElementById('print12').innerHTML ='your array square is:-' + map1;


// question-7//
let numbers = [23, 20, 17, 12, 5, 0, 1, 5, 12, 19, 20];

//  ascending order
numbers.sort(function (a, b) {
    return a - b;
});
document.getElementById("print13").innerHTML ='asceding:='+numbers;

// descending order
numbers.sort(function (a, b) {
    return b - a;
});
document.getElementById("print14").innerHTML = 'descending:='+numbers;
myColor = ["Red", "Green", "White", "Black"];
myColor.sort();
document.getElementById("print15").innerHTML ='color sorting :-'+ myColor;


// question-8//
words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];
      
const m = words.filter((word) => word.length < 8);
document.getElementById("print16").innerHTML ='filtered language:-'+ m;

// question-9//

n="airplane";
o=n.charAt(2);
document.getElementById("print17").innerHTML =o;

p="oxoxoxox";
q=p.replaceAll('x', 'X');
document.getElementById("print18").innerHTML =q;

r = "A New Java Book"; 
s=r.toUpperCase();
document.getElementById("print19").innerHTML =s;

// question-10//


let t = [2, 5, 6, 3, 8, 9];
u=t.reverse();
document.getElementById("print20").innerHTML ='reverse:-'+ u;

// question-11//

v=["vivek","kumar","kumar","kumar","kumar","kumar","kumar"];
w=v.includes("khandu");
document.getElementById("print21").innerHTML =w;

// question-12//

x="vivek";
y=x.length;
document.getElementById("print22").innerHTML =y;

// question-13//

z="I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";
A=z.replaceAll("dog", "cat");
document.getElementById("print23").innerHTML =A;

// question-14//

str= "Hire the top 1% freelance developers";
B=str.split(" ");
C=B.splice(0, 4);
document.getElementById("print24").innerHTML =C;

// question-15//

nstr=['5', 32, 'Daniel'];
D=nstr.toString();
document.getElementById("print25").innerHTML =D;