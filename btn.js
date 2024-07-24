const btn=document.getElementById("click")
const btn1=document.getElementById("double_click")
const btn3=document.getElementById("hover")
const btn4=document.getElementById("focus")
const btn5=document.getElementById("rightclick")

btn.addEventListener('click',() =>{
    if (btn){
        alert('click on event fire')
        return

    }
})
btn1.addEventListener('dblclick',()=>{
    if (btn1){
        alert('double click on event fire')
        return
    }
})
btn3.addEventListener('mouseover',()=>{
    if (btn3){
        alert ('hover on event fire')
        return
    }
})
btn4.addEventListener('focus',()=>{
    if (btn4){
        alert('focus on event fire')
        return
    }
})
btn5.addEventListener('contextmenu',()=>{
    if (btn5) {
        alert('right click on fire')
    }
})