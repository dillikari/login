function matchpassword(){
    let username=document.getElementById("username").value
    let password=document.getElementById("password").value 
   /*  console.log(username)
    console.log(password)
    open("foof.html") */
    if(username=="dillidharani" && password=="kariabi"){
        open("foof.html")
    }
    else{
        alert("invalid username or password  ")
    }
}