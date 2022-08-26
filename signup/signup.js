
// menu popup
document.querySelector("#popu").addEventListener("click",()=>{
    document.querySelector("body").style.overflowY="hidden"
})

document.querySelector("#close").addEventListener("click",()=>{
    document.querySelector("body").style.overflowY="visible"
})

document.querySelector("#aaaa").addEventListener("click",()=>{
    document.querySelector("body").style.overflowY="visible"
})
document.querySelector("#bbbb").addEventListener("click",()=>{
    document.querySelector("body").style.overflowY="visible"
})
document.querySelector("#cccc").addEventListener("click",()=>{
    document.querySelector("body").style.overflowY="visible"
})
document.querySelector("#dddd").addEventListener("click",()=>{
    document.querySelector("body").style.overflowY="visible"
})
document.querySelector("#eeee").addEventListener("click",()=>{
    document.querySelector("body").style.overflowY="visible"
})

document.querySelector("#ffff").addEventListener("click",()=>{
    document.querySelector("body").style.overflowY="visible"
})
document.querySelector("#gggg").addEventListener("click",()=>{
    document.querySelector("body").style.overflowY="visible"
})






document.querySelector("form").addEventListener("submit", myFunc)

        function myFunc(event) {
            event.preventDefault()


            let full_name = document.querySelector("#name").value

            let email_id = document.querySelector("#email").value
            localStorage.setItem("username", email_id)
            let password = document.querySelector("#pass").value
            localStorage.setItem("password", password)

            if(full_name==""||email_id==""||password==""){
                alert("Please Fill all the details")
            }

            else{
                alert("SignUp Sucessfully, Please Login !")
            }

            // localStorage.clear()


        }
