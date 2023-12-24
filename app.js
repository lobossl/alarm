/*
    Alarm by LoboSSL
*/
let main = document.getElementById("main")
let time = document.getElementById("time")
let start = document.getElementById("start")
let stop = document.getElementById("stop")

main.style.fontSize = "1em"
main.style.color = "#000000"

let speed = 100

let ms = 0
let seconds = 0
let minutes = 0
let hours = 0

let ready = false

function startEngine(h,m)
{
    setInterval(() =>
    {
        if(ready)
        {
            ms += 1

            if(ms == 10)
            {
                ms = 0
                seconds += 1
            }

            if(seconds == 60)
            {
                seconds = 0
                minutes += 1
            }

            if(minutes == 60)
            {
                minutes = 0
                hours += 1
            }

            if(hours == 24)
            {
                hours = 0

                ready = false

                ms = 0
                seconds = 0
                minutes = 0
                hours = 0

                main.style.backgroundColor = "#ff0000"
            }

            if((h == hours) && (m == minutes))
            {
                ready = false

                ms = 0
                seconds = 0
                minutes = 0
                hours = 0

                main.style.backgroundColor = "#ff0000"
            }

            main.innerText = "Hours:" + hours + "\nMinutes:" + minutes + "\nSeconds:" + seconds + "\nMilliSeconds:" + ms
        }
    },speed)
}

function test(e)
{
    startEngine(e[0],e[1])
}

start.addEventListener("click",() =>
{
    ready = true

    test(time.value.split(":"))

    main.style.backgroundColor = "#ffffff"
})

stop.addEventListener("click",() =>
{
    ready = false

    ms = 0
    seconds = 0
    minutes = 0
    hours = 0
    days = 0

    main.style.backgroundColor = "#ff0000"
})