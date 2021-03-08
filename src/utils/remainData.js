
class RemainData{
  constructor(){
  }

  remain(limit){
    const now = new Date()

    const remain = (Math.floor(limit - now + 1000) / 1000)
    const remainSecs = ('0' + Math.floor(remain % 60)).slice(-2)
    const remainMinutes = ('0' + Math.floor(remain / 60 % 60)).slice(-2)
    const remainHours = ('0' + Math.floor(remain / 3600 % 24)).slice(-2)
    const remainDays = Math.floor(remain / (3600 * 24) % 30)
    const remainMonths = Math.floor(remain / (3600 * 24 * 30) % 12 )
    const remainYears = Math.floor(remain / (3600 * 24 * 30 * 12) )
    // const remainMonths = Math.floor()

    return {
      remainSecs,
      remainMinutes,
      remainHours,
      remainDays,
      remainMonths,
      remainYears,
      remain
    }
  }

}

class updateModal extends RemainData{
  constructor(config){
    super();
    this.newDate = config.date
    this.modal =  document.querySelector('#modal')
    this.dateText = document.querySelector('#dateText')
    this.dateText.style.fontSize = '1rem'
    this.text = document.querySelector('#textModal')
    this.text.textContent = 'Still Left'
    this.text.style.fontSize = '2.5rem'
    document.querySelector('#modalImage').src ="./assets/stopwatch.svg"
    // console.log(this.newDate,data)
    this.render()
  }

  render(){
    setTimeout(() => {
      this.modal.style.display = 'flex'
      this.modal.classList.add('animate__fadeInDownBig')
      this.update(this.dateText)
    }, 1000)
  }
  
  update(display){
    const interval = setInterval(() => {
       const data = this.remain(this.newDate)   
 
       display.innerText = `${data.remainYears}y : ${data.remainMonths}m : ${data.remainDays}d : ${data.remainHours}h : ${data.remainMinutes}m : ${data.remainSecs}s`
 
       if(this.modal.style.display === 'none'){
         clearInterval(interval)
       }
     },1000)
   }
}

class UpdateCard extends RemainData{
  constructor(){
    super();
    this.presidentDate = document.querySelector('#presidentDate')
    this.presidentDate.style.fontSize = '.9rem'
    this.birthDate = document.querySelector('#birthDate')
    this.birthDate.style.fontSize = '.9rem'
    this.roseDate = document.querySelector('#roseDate')
    this.roseDate.style.fontSize = '.9rem'


    this.presidentLimit = new Date(2022,4,29,0)
    this.birthLimit = new Date(2021,4,10,0)
    this.roseLimit = new Date(2021, 2, 12, 0)


    this.updatePresidentCard()
    this.updateBirthCard()
    this.updateRoseCard()
  }
  updateBirthCard(){
    this.update(this.birthDate, this.birthLimit, 'Now! Buy me a coffe ;3')

  }

  updatePresidentCard(){
    this.update(this.presidentDate, this.presidentLimit, `Really? I must be dreaming`)
  }

  updateRoseCard(){
    this.update(this.roseDate, this.roseLimit, 'Out Already!')

  }

  update(display, limit, msgFinal){
    const interval = setInterval(() => {
       const data = this.remain(limit)   
 
       display.innerText = `${data.remainYears}y: ${data.remainMonths}m: ${data.remainDays}d: ${data.remainHours}h: ${data.remainMinutes}m: ${data.remainSecs}s`
 
       if(data.remain < 1){
         display.innerText = `${msgFinal || 'Now !'}`
         clearInterval(interval)
       }
     },1000)
   }
}

export { UpdateCard }
export default updateModal