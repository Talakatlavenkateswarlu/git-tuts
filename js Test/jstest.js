function abc()
{
    console.log("i am in side abc ")

}

console.log("hello")

let interval = setInterval(abc , 1000)

console.log("hi venky")

function clear()
{
    clearInterval(interval)

}

let timeout =setTimeout(clear , 4000)

function clear1()
{
    console.log(timeout)
}

clearTimeout(clear , 3000)