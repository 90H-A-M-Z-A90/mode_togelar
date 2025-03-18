let text = document.getElementById("mode")
let mode_togelar = document.getElementById("mode_togelar")
let mode = true
mode_togelar.onclick=() => {
if(mode==true){
    text.innerHTML="aqua mode"
    mode_togelar.style.backgroundColor="aqua"
    document.body.style.backgroundColor="aqua"
    mode=false
    text.style.color="red"
}
else{mode=true
document.body.style.backgroundColor="red"
text.innerHTML="red mode"
mode_togelar.style.backgroundColor="red"
text.style.color="aqua"
}

}
