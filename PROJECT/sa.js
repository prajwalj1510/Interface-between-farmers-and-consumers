function check()
{
    var x = document.getElementById("username").value ;
    var y = document.getElementById("password").value;

    if( x == "admin" && y == "12345")
    {
        alert("Login Successfull");
        window.location = "dash.html" ;
        return false; 
    }
    else alert("Login failed !!!");
}

function checkfa()
{
    alert("A Mail will be send to respective email id for Password Reset ");
}

function checkac(){
    alert("Account Created Successfully !!!");
}


// Cart value Increment and Decrement

function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    if(value<10){
        value++;
            document.getElementById('number').value = value;
    }
}
function decrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    if(value>1){
        value--;
            document.getElementById('number').value = value;
    }

}

/*
<div class="container">
<input type="button" onclick="decrementValue()" value="-" />
<input type="text" name="quantity" value="1" maxlength="2" max="10" size="1" id="number" />
<input type="button" onclick="incrementValue()" value="+" />
</div>

*/