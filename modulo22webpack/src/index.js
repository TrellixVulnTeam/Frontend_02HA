import './style.scss'
import img from './background_01.png'

function rootStyle(){
    const elemRoot = document.getElementById('root')
    elemRoot.classList.add('container')
}

function titleComponent ( ){
    const elemH1 = document.createElement('h1') 
    elemH1.innerHTML = 'Hello World!'
    elemH1.classList.add('title')
    return elemH1
}

function imageComponent(){
    const elemImg = new Image(2037,2090)
    elemImg.src = img
    return elemImg
}

rootStyle()
document.getElementById('root').appendChild(titleComponent())
document.getElementById('root').appendChild(imageComponent())