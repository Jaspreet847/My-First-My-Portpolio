


// const arr=[1,2,3,4,5,6];
// const arr1=[7,8,9,10,11,12];
// const arr2=[...arr,...arr1];
// console.log(...arr,...arr1,...arr2);




// const arr=[1,2,3,4,5,6];
// const [one,two,...rest]=arr;
// console.log(one);


// const my={
//     brand:'ford',
//     model: 'mustang',
//     color:'red'
// }
// const myy={
//     type:'car',
//     year:2021,
//     color:'yellow'
// }
// const p={...my,myy}
// console.log(p);


// var colors=["violet","Indigo","Blue","Green","Yellow"]
// var [a,b,...args]=colors;
// console.log(args);

// var obj={
//     name:"x,y,z",
//     roll:"12",
//     height:"5",   
// }
// const{name}=obj
// console.log(name);

const arr=[1,2,3,4,5,6];
arr.map((x,array ,index)=>{
    console.log(x,array ,index)
    
})



//filter
const arry=[1,2,3,4,5,6];
let a = arry.filter((x)=>{
    return x != 5
})
console.log(a);
