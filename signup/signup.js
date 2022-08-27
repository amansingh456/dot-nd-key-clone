

 $('.responsive').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    // responsive: [
    //     {
    //         breakpoint: 1024,
    //         settings: {
    //             slidesToShow: 3,
    //             slidesToScroll: 3,
    //             infinite: true,
    //             dots: true
    //         }
    //     },
    //     {
    //         breakpoint: 600,
    //         settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 2
    //         }
    //     },
    //     {
    //         breakpoint: 480,
    //         settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1
    //         }
    //     }
    //     // You can unslick at a given breakpoint now by adding:
    //     // settings: "unslick"
    //     // instead of a settings object
    // ]
});

$('.main-imgs').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    button: false,

});



$('.lovedbyimg').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 10000,

});

// menu popup
document.querySelector("#popu").addEventListener("click", () => {
    document.querySelector("body").style.overflowY = "hidden"
})

document.querySelector("#close").addEventListener("click", () => {
    document.querySelector("body").style.overflowY = "visible"
})

document.querySelector("#aaaa").addEventListener("click", () => {
    document.querySelector("body").style.overflowY = "visible"
})
document.querySelector("#bbbb").addEventListener("click", () => {
    document.querySelector("body").style.overflowY = "visible"
})
document.querySelector("#cccc").addEventListener("click", () => {
    document.querySelector("body").style.overflowY = "visible"
})
document.querySelector("#dddd").addEventListener("click", () => {
    document.querySelector("body").style.overflowY = "visible"
})
document.querySelector("#eeee").addEventListener("click", () => {
    document.querySelector("body").style.overflowY = "visible"
})

document.querySelector("#ffff").addEventListener("click", () => {
    document.querySelector("body").style.overflowY = "visible"
})
document.querySelector("#gggg").addEventListener("click", () => {
    document.querySelector("body").style.overflowY = "visible"
})






document.querySelector("form").addEventListener("submit", myFunc)

function myFunc(event) {
    event.preventDefault()


    let full_name = document.querySelector("#name").value

    let email_id = document.querySelector("#email").value
    localStorage.setItem("username", email_id)
    let password = document.querySelector("#pass").value
    localStorage.setItem("password", password)

    if (full_name == "" || email_id == "" || password == "") {
        swal("Please fill all the details .. ThankYou !")
    }

    else {
        swal("SignUp Sucessfully, Please Login ! ✌️")
    }

    // localStorage.clear()


}







let Bagproducts = JSON.parse(localStorage.getItem("BagItems")) ||[];

document.querySelector("#counting").innerText = Bagproducts.length

function visibleDataFour(data) {
    data.map((elem, i) => {
        let box = document.createElement("div")
        box.setAttribute("class", "card")



        let cardImage = document.createElement("div")
        cardImage.setAttribute("class", "card-image")


        let prodImg = document.createElement("img")
        prodImg.setAttribute("src", elem.img_url)

        cardImage.append(prodImg)




        let cardContent = document.createElement("div")
        cardContent.setAttribute("class", "card-content")


        let prodHead = document.createElement("h6")
        prodHead.innerText = elem.rating + " "
        let prodStock = document.createElement("span")
        prodStock.innerText = elem.stock

        prodHead.append(prodStock)

        let prodDesc = document.createElement("p")
        prodDesc.innerText = elem.name


        let prodWholePrice = document.createElement("div")
        prodWholePrice.setAttribute("id", "prodWHolePrice")
        let prodSPrice = document.createElement("div")
        prodSPrice.innerText = elem.sPrice
        let prodNPrice = document.createElement("div")
        prodNPrice.innerText = elem.nPrice

        prodWholePrice.append(prodSPrice, prodNPrice)



        let delButton = document.createElement("button")
        delButton.innerText = "Delete item"
        delButton.addEventListener("click", (event) => {
            event.target.parentNode.remove()
            Bagproducts.splice(i, 1)
            localStorage.setItem("BagItems", JSON.stringify(Bagproducts))
        })


        cardContent.append(prodHead, prodDesc, prodWholePrice)


        box.append(cardImage, cardContent, delButton)
        document.querySelector(".card-wrapperFour").append(box)
    })
}
// visibleDataFour(Bagproducts)
console.log(visibleDataFour(Bagproducts))






// cart popup
document.querySelector("#popuxyz").addEventListener("click", () => {
    document.querySelector("body").style.overflowY = "hidden"
})

document.querySelector("#closexxx").addEventListener("click", () => {
    document.querySelector("body").style.overflowY = "visible"
})

document.querySelector("#checkoutnow").addEventListener("click", () => {
    document.querySelector("body").style.overflowY = "visible"
})