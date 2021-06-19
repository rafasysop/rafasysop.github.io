
const foto = document.querySelector('.foto')
const descricao = document.querySelector('.descricao')
const titleName = document.querySelector('.title-name')
const subtitle = document.querySelector('.subtitle')
const icons = document.querySelector('.icons')
const main = document.querySelector('.main-container')
const loading = document.querySelector('.loading')

const tl = new TimelineMax();

tl
    .to(loading, .1, {display: 'none'})
    .from(foto, 1, {y: '-80vh', opacity: 0})
    .from(descricao, 1, {height: 0, padding: 0})
    .from(titleName, .9, { opacity: 0 })
    .from(subtitle, .9, { opacity: 0 })
    .from(icons, .5, { opacity: 0 })
    .from(main, .5, { y: '80vh', opacity: 0 })
    
