const lata = document.getElementById('lata')
const circle = document.getElementById('circle')
const texto = document.getElementById('textoh1')
const paragrafo = document.getElementById('paragrafo')
function clicarlata1(){

    
    
    lata.src = 'latapreta (1).png' 
    circle.classList.add('circle1')
    circle.style.backgroundColor = 'black'
    document.body.style.color = '#000000c2'
    textoh1.style.color = '#000000c2'
    paragrafo.style.color = '#000000c2'
   
    
    
    

}

function clicarlata2(){
    const lataazul = document.getElementById('lata')
    
    circle.style.backgroundColor = '#004B93'
    lata.src = 'lataazul.png' 
    document.body.style.color = '#004B93'
    textoh1.style.color = '#004B93'
    paragrafo.style.color = '#004B93'

}

function clicarlata3(){
    
    circle.style.backgroundColor = 'green'
    lata.src = 'lataverde.png' 
    document.body.style.color = 'green'
    textoh1.style.color = 'green'
    paragrafo.style.color = 'green'

}