console.log("jammu")
console.log("kamboj")

setTimeout( ()=>{
    console.log("I am mern")
}, 2000);
console.log("the end");




const callback=(arg)=>{
    console.log(arg);
}


const loadscript=(src, callback)=>{
    let sc=document.createElement("script");
    sc.src=src;
    sc.onload=() => callback("jammu");
    document.head.append("m")
      
}
  loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)
//   // (script)=>{
// alert('script is loaded')
// alert('script.src')
//   });