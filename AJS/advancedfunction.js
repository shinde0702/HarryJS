// Session-01 Advanced Function
// Define function--->
// i.By Expression Function--> When we store function in  variable (i.e let expression = function fun(){body} and called by also same variable (we can use any name of variable).


/*let expression = function fun(){
    document.write(" This is By Expression Function")
}
expression();      */


// ii.Ananoymous Function--> no need to take function name /Without name function.

/*let num = function(){

    document.write("This is Ananoymous Function")
}
num(); */



// iii.Arrow Function--> no need to write function keyword, function name also not required, if single statement then no need to use bracess curely bracket,  need to use Arrow like this =>  .

/*let arr=()=> document.write("This is Arrow type function")

arr(); //calling */

/*function fun (num1)
{
    document.write(num1)
}
let k=10; //primative variable
let ar=[55,99]
fun(k); //call by value
fun(ar) //call by reference*/


// Call Back Function ---> When we pass function as parameter then it is called call back function.

function fun(num)
{
num()
}

fun(addition);

function addition()
{
console.log("hi this is the call back function")
}
