function callbacktest()
{
    console.log("i am being printed callbacktest function")

}

function add(n1,n2,func) 
 {
    console.log(n1+n2);
    func()
}
let a = 2
let b = 5

add(a,b,callbacktest)