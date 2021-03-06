import RemainData  from './utils/remainData.js';

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
    const values = [year.value, month.value, day.value, hour.value, time.value]
    sendBtn.classList.add('animation')

    console.log(new Date(year.value, month.value, day.value, hour.value, time.value))

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


