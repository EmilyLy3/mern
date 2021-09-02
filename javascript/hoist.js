// 1
console.log(hello);
var hello = 'world';
// var hello; --> var hello is hoisted
// console.log(hello); --> logs 'undefined'
// hello = 'world';



// 2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// var needle; --> var needle is hoisted
// function test(){ --> standalone function test() is hoisted
//     var needle; --> var needle is hoisted within the function
//     needle = 'magnet';
//     console.log(needle);
// }
// needle = 'haystack';
// test(); --> test is called, logs 'magnet' which is the value assigned to needle within the function test()



// 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// var brendan; --> var brendan is hoisted
// function print(){ --> standalone function print() is hoisted
//     brendan = 'only okay';
//     console.log(brendan); --> this will log 'only okay' when function is called
// }
// brendan = 'super cool';
// console.log(brendan) --> global brendan is logged, logs 'super cool'



// 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// var food --> var food is hoisted
// function eat(){ --> standalone function eat() is hoisted
//     var food; --> var food is hoisted
//     food = 'half-chicken';
//     console.log(food); --> this will log 'half-chicken' when function is called
//     food = 'gone';
// }
// food = 'chicken';
// console.log(food); --> global food is logged, logs 'chicken'
// eat(); --> function eat() is called, logs 'half-chicken'



// 5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// var mean --> var mean gets hoisted
// mean() --> throws error since mean has not be assigned the function yet
// console.log(food); --> will throw an error because var food is not accessible outside the function
// mean = function() {
//     var food; --> var food gets hoisted
//     food = "chicken";
//     console.log(food); --> will log "chicken"
//     food = "fish";
//     console.log(food); -->  will log "fish"
// }
// console.log(food); --> will throw an error because var food is not accessible outside the function



// 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// var genre; --> var genre is hoisted
// function rewind(){ --> standalone function rewind() is hoisted
//     var genre; --> var genre is hoisted
//     genre = "rock";
//     console.log(genre); --> will log "rock"
//     genre = "r&b";
//     console.log(genre); --> will log "r&b"
// }
// console.log(genre); --> logs 'undefined'
// genre = "disco";
// rewind(); --> calls rewind() function, logs 'rock' 'r&b'
// console.log(genre); --> global genre is logged, logs 'disco'



// 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// function learn() { --> standalone functino learn() is hoisted
//     var dojo; --> var dojo is hoisted
//     dojo = "seattle";
//     console.log(dojo); --> will log "seattle"
//     dojo = "burbank";
//     console.log(dojo); --> will log "burbank"
// }
// dojo = "san jose";
// console.log(dojo); --> global dojo is logged, logs "san jose"
// learn(); --> function learn() is called, logs "seattle" "burbank"
// console.log(dojo); --> global dojo is logged, logs "san jose"



// 8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// function makeDojo(name, students){ --> standalone function makeDojo() is hoisted
//     const dojo --> const dojo is hoisted
//     dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now"; --> will throw error because const dojo is assigned an empty dictionary as a value not an empty string
//     }
//     return dojo;
// }
// console.log(makeDojo("Chicago", 65)); --> logs {name: "Chicago", students: 65, hiring: true}
// console.log(makeDojo("Berkeley", 0)); --> throws error
