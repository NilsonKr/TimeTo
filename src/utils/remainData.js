import monthDays from './monthDays.js';

class RemainData {
  constructor(config){
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
      this.update()
    }, 1000)
  }

  update(){
   const interval = setInterval(() => {
      const data = this.remain(this.newDate)   

      this.dateText.innerText = `${data.remainYears}y : ${data.remainMonths}m : ${data.remainDays}d : ${data.remainHours}h : ${data.remainMinutes}m : ${data.remainSecs}s`

      if(this.modal.style.display === 'none'){
        clearInterval(interval)
      }
    },1000)
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

export default RemainData