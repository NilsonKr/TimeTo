import RemainData  from './utils/remainData.js';

const year = document.querySelector('#yearInput')
const month = document.querySelector('#monthInput')
const day = document.querySelector('#dayInput')
const hour = document.querySelector('#hourInput')
const time = document.querySelector('#timeInput')

const sendBtn = document.querySelector('#send')



document.body.addEventListener('click', ev => {
  const target = ev.target

  if(target.id === 'send'){
    sendBtn.classList.add('')
  }
})


// const calcDate = new RemainData({display: 'Display', date: new Date(2021,4,10,24,30,20)})


