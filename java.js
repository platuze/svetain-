let mygtukas=document.querySelector('button')
let bodis=document.querySelector('body')




mygtukas.addEventListener('click',() =>{
  mygtukas.classList.toggle('spalva')
  bodis.classList.toggle('spalva')
})

mygtukas.addEventListener('click',() =>{
  bodis.classList.toggle('dydis')
})

