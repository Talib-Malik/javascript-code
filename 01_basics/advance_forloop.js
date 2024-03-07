// for of

// [ "" ,"" , ""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
    
}

const greetings = "Hello world!"
for (const greet of greetings) {
console.log(`Each char is ${greet}`);    
}
//maps

const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "united state of america")
map.set('fr', "france")

map.set('IN', "INDIA")  //we cannot use more map same as it only give one

console.log(map);

for (const [key, value] of object) {
    console.log(key , ':-',value);
}

const myObject = {
    'game1' : 'NFS',
    'game2'  :'spiderman'
}

// for (const [key,value] of myObject) {
//     console.log(key, ':-,value');
    
// }   doesnt work here
//----------------------------------------------------------

// four in loop

const myObject2 ={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}


for (const key in myObject2) {
    console.log(`${key} shortcut is for ${myObject2[key]}`);

           }


           const programming= ["js","rb","py","java","cpp"]

           for (const key in programming) {
            // console.log(key); print only key numbers
            // console.log(programming[key]); print the value
           }



        //for each loop    -----------------------------------------------------------



        const coding = ["js","ruby","java","cpp","python"]

        // coding.forEach(function (val){
        //     console.log(val);
        // })


// coding.forEach( (item) =>{
// console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

 coding.forEach ( (item, index, arr)=>{
console.log(item, index,arr);
 })

 const myCoding = [
    {
        languageName: "javascript",
        languageFileName:"java"
    }
    {
        languageName: "python",
        languageFileName:"py"
    }
    {
        languageName: "java",
        languageFileName:"jav"
    }
 ]

 myCoding.forEach ( (item)=>{
    console.log(item.languageName);
 })
  