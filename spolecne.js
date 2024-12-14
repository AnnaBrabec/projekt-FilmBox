//3
const tlacitko = document.querySelector('#menu-tlacitko')
const menuPolozky = document.querySelector('#menu-polozky')
const ikona = tlacitko.querySelector('i')
tlacitko.addEventListener('click', function() {
    menuPolozky.classList.toggle('show') //přepíná třídu show, rozbaluje menu
    if (menuPolozky.classList.contains('show')) {
        ikona.classList.remove('fa-bars')
        ikona.classList.add('fa-xmark')
    } else {
        ikona.classList.remove('fa-xmark')
        ikona.classList.add('fa-bars')
    } //mění hamburger na křížek
})

