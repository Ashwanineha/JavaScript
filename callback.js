// function sum(a,b){
//     console.log(a+b)
// }

// function mul(a,b){
//     console.log(a*b)
// }

// const callback = [sum,mul]

// // function calculator(a,b,res){
// //     res(a,b)
// // }


// callback.forEach(function (func) {
//     func(5,6);
// });    

// const hello = () =>{
//     console.log("Hello");
    
// }

// setTimeout(hello,4000)

// function getData(dataid){
// setTimeout(()=>{
//     console.log("data",dataid),3000;
//     },2000)    
// }


// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log("Hello!",dataId);
//         if (getNextData){
//             getNextData();
//         }
//     },2000);
// }


// getData("Ashwani",()=>{
//     getData ("Neha",()=>{
//         getData(3,()=>{
//             getData(4)
//         })
//     })
// })

// let promise = new Promise((resolve, reject) => {
//     console.log("hello")
// })
