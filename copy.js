let newURL=document.getElementById("small")
let copybutton = document.getElementById("shorted")
copybutton.onclick=()=>{
newURL.select();
window.navigator.clipboard.writeText(newURL.value);
}