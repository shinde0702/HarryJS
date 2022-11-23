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


// 1.Call Back Function ---> When we pass function as parameter then it is called call back function.

function calculator(myfunction)
{
myfunction()
}

calculator(add);

function add ();

{
let num1=10;
let num2=20;
let sum=num1+num2
document.write("adddition of two no is ::", sum)
}

function sub()
{
let num1=10;
let num2=20;
let sub=num1-num2
document.write("substraction of two no is ::", sub)

}


// 2.Higher Order function---> When a function return another function then we called higher order function

function fun()
{
    return function(){document.write("hi this is higher order function")}
}
let result=fun()
result();

// 3. IIFE Immidiate Invoked Function Expression

(function fun(){
    document.write("hi this is IIFE Immidiate Invoked Function")
}())
