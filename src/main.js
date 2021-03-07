import Validate from './utils/validate.js';
import { UpdateCard } from './utils/remainData.js';

const year = document.querySelector('#yearInput')
const month = document.querySelector('#monthInput')
const day = document.querySelector('#dayInput')
const hour = document.querySelector('#hourInput')
const time = document.querySelector('#timeInput')

const sendBtn = document.querySelector('#send')
const modal = document.querySelector('#modal')
const loveCard = document.querySelector('#loveCard')

new UpdateCard()

document.body.addEventListener('click', ev => {
  const target = ev.target

  if(target.id === 'send'){
    const value = [year.value, month.value, day.value, hour.value]
    sendBtn.classList.add('animation')

    new Validate({values : value, time : time.value})

    setTimeout(() => sendBtn.classList.remove('animation'), 3000 )
  }

  if(target.classList.contains('modal__container') || target.classList.contains('modal--close')){

    modal.style.display = 'none'
  }

  if(target.classList.contains('love')){
    loveCard.classList.add('animate__pulse')

    setTimeout(() => loveCard.classList.remove('animate__pulse'),2000)
    deployModal('Now, Text me bae ;3', './assets/heart.svg')
  }

})

function deployModal(text,img){
  const modalImg =  document.querySelector('#modalImage')
  const textModal = document.querySelector('#textModal')
  textModal.style.fontSize = '1.5rem'

  textModal.innerText = text
  modalImg.src = img

  setTimeout(() => {
    modal.style.display = 'flex'
    modal.classList.add('animate__fadeInDownBig')
  }, 1000)
}


