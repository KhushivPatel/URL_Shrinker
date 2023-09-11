let btn = document.getElementById("short");
btn.addEventListener('click',shorten);


// diffining short function
async function shorten(){
    let longURL = document.getElementById("long").value;
    let shortURL = document.getElementById("small");
   const result= await fetch(` https://api.shrtco.de/v2/shorten?url=${longURL}`);
   const data =await result.json();
   shortURL.value=data.result.short_link2;
   console.log(data.result.short_link2)
}
shorten()

document.getElementById("shorted").addEventListener("click", ()=>{

    const tooltip = document.getElementById("tooltip");
    tooltip.style.display = "block"
    // Hide the tooltip after 1 second
    setTimeout(() => {
        tooltip.style.display = "none"
    }, 500); // 1000 milliseconds (1 second)
})
  
  



// let copyText=document.getElementById("shorted");
// copyText.addEventListener("click",function(){
    // const cssRule = `#shorted.active::before{
    //     display:none;
    // }
    // #shorted.active::after{
    //     display:none;
    // }
    // `;
    // const styleElement = document.createElement("style");
    // styleElement.appendChild(document.createTextNode(cssRule));
    // document.head.appendChild(styleElement);



    // setTimeout(()=>{
    //     console.log("jhdf");
    //     document.head.removeChild(styleElement);
    // },500)
// })




// copyText.querySelector("button").addEventListener("click",function(){
//     let input=copyText.querySelector("input.text");
//     input.select();
//     document.execCommand("copy");
//     copyText.classList.add("active");
// })
