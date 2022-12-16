// Slider

let imgs = []
let slider = document.querySelector('#Slider')
let s = 1
let imgAtual
let maxImg

const preLoad = () =>{
    if(screen === '768px'){
        window.alert('teste')
    }
    for(let i = 0; i < 5; i++){
        s
        imgs[i] = new Image()
        imgs[i].src = 'imgs/s' +s+ ".svg"
        s++
    }

   
}

const carregaImg = (img) =>{
    slider.style.backgroundImage = "url(' "+imgs[img].src + " ')"
}


const trocaImg = ()=>{
    imgAtual++
    if(imgAtual>maxImg){
        imgAtual=0
    }
    carregaImg(imgAtual)
}


window.addEventListener('load', ()=>{
    preLoad()
    imgAtual = 0
    maxImg = imgs.length-1
    slider
    carregaImg(imgAtual)
    setInterval(trocaImg, 3000)
})




document.addEventListener('click', (e)=>{
    const isDropdownBtn = e.target.classList.contains('dropdown')

    if(!isDropdownBtn && e.target.closest('.navbar-item') !=  null){
        return
    }

    let currentSubmenu

    if(isDropdownBtn){
        const item = e.target.closest('.navbar-item')

        currentSubmenu = item.querySelector('.submenu')

    currentSubmenu.classList.toggle('show')
    }


    document.querySelectorAll('.submenu.show').forEach(submenu => {
        if(submenu == currentSubmenu) return

        submenu.classList.remove('show')
    })
})




let nome, email, whats
let Esubmit = document.querySelector('#btn-submit')

const submit = (e) =>{
    nome = document.querySelector('#Nome').value
    email = document.querySelector('#Email').value
    whats = document.querySelector('#Whats').value
   
    if(nome == '' || email == '' || isNaN(whats)){
        window.alert("Confira suas informações novamente!")
        return e.preventDefault()
    } else {
        window.alert("Confira seu Email Por gentileza!")
        return e.preventDefault()
    }
}



Esubmit.addEventListener("click", submit)



// Botão de subir


let btntop = document.getElementById("btn-up")

btntop.addEventListener("click", ()=>{
  
    window.scrollTo(0, 0) + 'slow'
} )
