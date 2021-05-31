const showMenu =(hamburguesaId,navbarId) =>{
    const hamburgesa = document.getElementById(hamburguesaId),
           navbar = document.getElementById(navbarId) 
    if(hamburguesa && navbar){
        hamburgesa.addEventListener('click', () =>{
            navbar.classList.toggle('show')
        })
    }
}
showMenu('hamburguesa','navbar')