// const myNumers = [1,2,3,4,5,6,7,8,9,10]

// // const newNums = myNumers.map( (num) => num + 10)   //if you apply scope then ypu have to write return

// const newNums = myNumers
//             .map( (num) => num * 10)
//              .map( (num) => num + 1) 
//              .filter( (num) => num >= 40)
// console.log(newNums);








// --------------------------reduce---------------


const myNums = [1,2,3]

//  const myTotal = myNums.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and currval:${currval}`);
//     return acc +currval
//  },0)


const myTotal = myNums.reduce( (acc, currval) =>acc+currval,0)

 console.log(myTotal);


 const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "mobile dev course ",
        price: 4999
    },
    {
        itemName: "py course",
        price: 6999
    },
 ]

 const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price,0)
 console.log(priceToPay)