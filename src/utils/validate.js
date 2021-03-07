import monthDays from './monthDays.js';
import RemainData from './remainData.js';

class Validate {
  constructor(config){
    this.values = config.values
    this.year = parseInt(config.values[0])
    this.month = parseInt(config.values[1]) - 1
    this.day = parseInt(config.values[2])
    this.hour = parseInt(config.values[3])
    

    this.time = config.time.toLocaleLowerCase()
    this.date = new Date(this.year,this.month,this.day,this.hour)
    this.now = new Date()

    this.modal =  document.querySelector('#modal')
    this.text = document.querySelector('#textModal')
    this.text.style.fontSize = '1.5rem'
    this.modalImg = document.querySelector('#modalImage')

    this.dateRight()    
    // console.log(this.date)
    // console.log(this.time, this.year, this.month, this.day, this.hour)
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
      case this.year < 0:
        this.throwError('Oh oh Wrong Year! Check It')
      break;
      case this.month > 11 || this.month < 0:
        this.throwError('Oh oH Wrong Month! Check It')
      break;
      case this.day > monthDays[this.month]  || this.day < 0:
        this.throwError('Oh oH Wrong Day! Check It')
      break;
      case this.hour > 12 || this.hour < 0:
        this.throwError('Oh oH Wrong Hour! Check It')
      break;
      case this.time !== 'am' && this.time !== 'pm':
        this.throwError('Oh oH Wrong Time Period! Check It')
      break;
      default:
        this.isNegative()
    }
  }
  isNegative(){
    const validation = (this.date - this.now) + ""

    if(validation.includes("-")){
      this.throwError('Date Wrong! Try with one on the future')
    }else{
      const realHour = this.getExactHour()

      const date = new Date(this.year,this.month,this.day,realHour)

      new RemainData({date,})
    }
  }
  getExactHour(){
    let exactHour = this.hour

    if(this.time === 'pm'){
      exactHour += 12;
    }
    if(this.time === 'am' && this.hour === 12){
      exactHour = 0;
    }
    if(this.time === 'pm' && this.hour === 12){
      exactHour = 12;
    } 


    return exactHour

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