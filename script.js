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

const submit = () =>{
    nome = document.querySelector('#Nome').value
    email = document.querySelector('#Email').value
    whats = document.querySelector('#Whats').value
   
    if(nome == '' || email == '' || isNaN(whats)){
        window.alert("Confira suas informações novamente!")
        return
    } else {
        window.alert("Confira seu Email Por gentileza!")
        return
    }
}


Esubmit.addEventListener("click", submit)


