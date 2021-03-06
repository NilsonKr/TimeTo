class Validate {
  constructor(config){
    this.values = config.values
    this.year = config.values[0]
    this.month = config.values[1]
    this.day = config.values[2]
    this.hour = config.values[3]
    

    this.time = config.time
    this.now = new Date()

    this.modal =  document.querySelector('#modal')
    this.text = document.querySelector('#textModal')
    this.text.style.fontSize = '1.5rem'
    this.modalImg = document.querySelector('#modalImage')

    this.dateRight()    
  }

  dateRight(){
   if(this.values.includes("") || this.values.includes(NaN)){
    this.text.innerText = 'Oh oH Wrong Date!! Try Again'
    this.modalImg.src = './assets/error.svg'

    setTimeout(() => {
      this.modal.style.display = 'flex'
      this.modal.classList.add('animate__fadeInDownBig')
    }, 1000)
  }else{
      this.validateDays()
  }
  // console.log(this.values)

  }

  validateDays(){
    switch(true){
      case this.month > 11:
        console.log('Month Wrong')
      break;
      case this.month > 11:
        console.log('Month Wrong')
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
}

export default Validate