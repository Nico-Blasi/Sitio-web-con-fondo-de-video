let theme = document.querySelector('.theme')
let menu = document.querySelector('.menu')
let body = document.querySelector('body')
let navigation = document.querySelector('.navigation')

theme.onclick = function(){
    body.classList.toggle('dark')
    theme.classList.toggle('active')
}

menu.onclick = function(){
    menu.classList.toggle('active')
    navigation.classList.toggle('active')
}