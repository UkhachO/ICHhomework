// 1.

let human = {
    name:'Aleksandr',
    age: 23,
}

console.log(`Name: ${human.name}, Age: ${human.age}`);

console.log('-------------------------------');

// 2.

let book = [
    {name: 'The Witcher', author: 'Andrzej Sapkowski'},
    {name: 'A Song of Ice and Fire', author: 'George R.R. Martin'},
    {name:'Harry Potter', author: 'J.K. Rowling'},
    {name: 'Atlas Shrugged', author: 'Ayn Rand'},
    {name: 'The Prophet', author: 'Kahlil Gibran'},
    ];


for(let i = 0; i < book.length; i++) {    
    let library = book[i];

    console.log(`Book: ${library.name}, Author: ${library.author}`);
};

console.log('-------------------------------');

// 3.

const rectangle = {
    a: 10,
    b: 35,
};

rectangle.s = rectangle.a * rectangle.b;
rectangle.p = 2 * (rectangle.a + rectangle.b);

console.log(`S: ${rectangle.s}, P: ${rectangle.p}`);

console.log('-------------------------------');

// 4.

let fruit = [
    { name: 'Apple', color: 'red' },
    { name: 'Banana', color: 'yellow' },
    { name: 'Cherry', color: 'red' },
    { name: 'Grape', color: 'purple' },
    { name: 'Lemon', color: 'yellow' },
    { name: 'Strawberry', color: 'red' },
];

for(let i = 0; i < fruit.length; i++) {
    let redColor = fruit[i].color;

    if(redColor === 'red') {
        console.log(fruit[i]);
    }
};
    
console.log('-------------------------------');

// 5.

let playlist = {
     songs: [
         {name: 'Dancing Shadows', playLength: 120},
         {name: 'Echoes of the Night', playLength: 240},
         {name: 'Whispering Winds', playLength: 90},
    ]
 }

 for(let i = 0; i < playlist.songs.length; i++) {
     const song = playlist.songs[i];

     console.log(`Song name: ${song.name}, song duration: ${song.playLength}`)
 }

console.log('-------------------------------');