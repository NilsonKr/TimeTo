import monthDays from './monthDays.js';

class Validate {
  constructor(config){
    this.values = config.values
    this.year = config.values[0]
    this.month = parseInt(config.values[1]) - 1
    this.day = parseInt(config.values[2])
    this.hour = parseInt(config.values[3])
    

    this.time = config.time
    this.now = new Date()

    this.modal =  document.querySelector('#modal')
    this.text = document.querySelector('#textModal')
    this.text.style.fontSize = '1.5rem'
    this.modalImg = document.querySelector('#modalImage')

    this.dateRight()    

    console.log(this.month, this.day, this.hour)
  }

  dateRight(){
   if(this.values.includes("") || this.values.includes(NaN)){
    this.throwError('Oh oH Wrong Date! Try Again')
  }else{
    this.validateDays()
  }
  // console.log(this.values)

  }

  validateDays(){
    switch(true){
      case this.month > 11:
        this.throwError('Oh oH Wrong Month! Check It')
      break;
      case this.day > monthDays[this.month]:
        this.throwError('Oh oH Wrong Day! Check It')
      break;
      case this.hour > 12:
        this.throwError('Oh oH Wrong Hour! Check It')
      break;
      default:
        console.log('Heyy') 
    }
  }
  isNegative(){
    const validation = (this.date - this.now) + ""

    if(validation[0] === '-'){
      console.log('IsNegative')
    }else{
      console.log('Its Right')
      console.log(validation)
    }
  }

  throwError(errorMsg){
    this.text.innerText = errorMsg
    this.modalImg.src = './assets/error.svg'

    setTimeout(() => {
      this.modal.style.display = 'flex'
      this.modal.classList.add('animate__fadeInDownBig')
    }, 1000)
  }
}

export default Validate