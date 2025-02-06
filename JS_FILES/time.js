let all  = new Date()
let h = all.getHours()
let m = all.getMinutes()
let s  =all.getSeconds()
let d = all.getDate()

document.getElementById("mytime").innerHTML= h + " : " + m + " : " + s + " Date -  " + d
setInterval(all, 1000)
all()


