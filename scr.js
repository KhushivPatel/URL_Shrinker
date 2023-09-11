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