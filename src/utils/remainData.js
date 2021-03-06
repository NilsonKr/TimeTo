import monthDays from './utils/monthDays.js';

class RemainData {
  constructor(config){
    this.now = new Date()
    // this.display = config.display
    this.newDate = config.date

    const data = this.remain(this.newDate)

    console.log(data)
  }
  remain(limit){
    const remain = (Math.floor(limit - this.now) / 1000)
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
    }
}

}

export default RemainData