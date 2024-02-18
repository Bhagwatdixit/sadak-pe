var a = document.querySelector("h1") 
a.addEventListener("click", function(){
    a.innerHTML = "Sadak pe!!!"
    a.style.color = "red"
    a.style.fontSize = "100px"
    a.style.backgroundColor = "yellow"
})

var b = document.querySelector("button")
b.addEventListener("click", function(){
    b.innerHTML = " Ab upar jo likha hai uspe click kr!!"
    b.style.color = "blue"
    b.style.backgroundColor = "green"
})