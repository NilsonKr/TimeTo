import RemainData  from './utils/remainData.js';
import Validate from './utils/validate.js';

const year = document.querySelector('#yearInput')
const month = document.querySelector('#monthInput')
const day = document.querySelector('#dayInput')
const hour = document.querySelector('#hourInput')
const time = document.querySelector('#timeInput')

const sendBtn = document.querySelector('#send')
const modal = document.querySelector('#modal')



document.body.addEventListener('click', ev => {
  const target = ev.target


  if(target.id === 'send'){
    const value = [year.value, parseInt(month.value) - 1, day.value, hour.value]
    sendBtn.classList.add('animation')

    new Validate({values : value, time : time.value})

    // setTimeout(() =>{ 
    //   modal.style.display = 'flex'
    //   modal.classList.add('animate__fadeInDownBig')
    // }, 1000)
    setTimeout(() => sendBtn.classList.remove('animation'), 3000 )
  }

  if(target.classList.contains('modal__container') || target.classList.contains('modal--close')){

    modal.style.display = 'none'
  }

})


// const calcDate = new RemainData({display: 'Display', date: new Date(2021,4,10,24,30,20)})


