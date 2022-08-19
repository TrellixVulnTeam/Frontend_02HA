import './style.scss'
import img from './background_01.png'

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

document.body.appendChild(titleComponent())
document.body.appendChild(imageComponent())