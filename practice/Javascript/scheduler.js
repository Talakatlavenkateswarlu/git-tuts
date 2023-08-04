function abc()
{
    console.log("i am in side abc")
}

console.log("hello")
let Interval = setInterval(abc,1000)
console.log("Hi")
console.log("venky")

function clear()
{
    clearInterval(Interval)

}

 let Timeout = setTimeout(clear, 3000);



