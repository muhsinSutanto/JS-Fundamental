// const words = [
//     "spray",
//     "limit",
//     "elite",
//     "exuberant",
//     "destruction",
//     "present",
//     "happy"
//   ];
  
//   let lengWords = words.filter (words => { 
//       console.log(words); return words.length > 6})

//     let lengtword = words.filter(words => word.length > 6)

// console.log(lengWords)



// numbers = [1,4,7,9,10];

// var map = numbers.map( number => number * 2)
// var print = numbers.map(number => number);
// console.log(numbers)
// console.log(map)
// console.log(print);


// ---------- foreach gabisa return.. jadi harus dibuat penampung---------------
// var array1 = ["a", "b", "c"];
// var text = "";

// array1.forEach(function(element) {
//   text += element + ",";
// });

// console.log(text)

//----------find----------------- untuk menemukan nilai didalam array yang pertama
// var array1 = [5, 12, 8, 130, 44];

// var found = array1.find(function(element) {
//   return element > 10;
// });

// console.log(found);


// -------------ternery operator------------------------
// let num = 2;
// (num === 3) ? (console.log('true')) : (console.log('false'))

// const names = [
//     "Mr. Fahri",
//     "Mr. Abdul",
//     "Mrs. Josephhine",
//     "Mr. Joseph",
//     "Mr. Paul",
//     "Mrs. Paula",
//     "Mr. Hakim"
//   ];

//level 0
// let result = " ";
  
// let print = names.forEach(name => result += name + ',')
// console.log(result)

// let map = names.map(name => name);
// console.log(map);

//level 1
// let filter = names.filter( name => name[2] == '.')
// console.log(filter);

//level 2
// let filter= names.map(name => {
//     if(name[2] === '.') {return 'laki'} 
//     else if (name[2] === 's') {
//         return 'perempuan'
//     }
// })

// console.log(filter);

// level 3
// let dicari = prompt('cari kata')
// let search = names.filter(name => name.toLocaleLowerCase().includes(dicari))
// document.write(`kata di cari adalah ${search}`)


// level 4
// const names1 = ["Mr. Fahri", "Mr. Abdul", "Mrs. Josephhine"];
// const names2 = ["Mr. Joseph", "Mr. Paul", "Mrs. Paula", "Mr. Hakim"];
// const name3 = names1.concat(names2);

// console.log(name3)

// level 5

const names = [
    "Mr. Fahri",
    null,
    undefined,
    "Mr. Abdul",
    24,
    "Mrs. Josephhine",
    "Mr. Joseph",
    "Mr. Paul",
    32,
    "Mrs. Paula",
    7,
    22,
    "Mr. Hakim"
  ];
  

let print = names.filter(name => {
    return typeof name === 'string';
})

let name2 = ' '

print.forEach(element => { 
    name2 += element + ','
    
});

console.log(name2);

// var input = prompt('kata dicari');
// var cari = prompt('kata dicari')



