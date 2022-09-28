const clock = document.querySelector("h2#clock")

function getClock() {
    const date = new Date()
    const hh = date.getHours().toString().padStart(2, "0")
    const mm = date.getMinutes().toString().padStart(2, "0")
    const ss = date.getSeconds().toString().padStart(2, "0")

    clock.innerText = `${hh}:${mm}:${ss}`
}

getClock()
setInterval(getClock, 1000)