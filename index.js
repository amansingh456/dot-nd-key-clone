$(".responsive").slick({
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

$(".main-imgs").slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    button: false,
});

$(".lovedbyimg").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 10000,
});






let BagArr = JSON.parse(localStorage.getItem("BagItems")) || [];



let dataOne = [
    {
        img_url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_16_a20998d9-17fa-4e89-b31c-4e564f5cc009.jpg?v=1661765727",
        rating:"⭐ 4.7 / 5",
        stock:"  (58)",
        name:"20% Vitamin C Serum with  Ferulic Acid| Fades Royal",
        sPrice:"Rs: 665.00",
        nPrice:"Rs: 499.00"

     },
    {
        img_url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/CICASUNSCREEN_2_1.jpg?v=1661764950",
        rating:"⭐ 4.8 / 5",
        stock:"  (275)",
        name:"Vitamin C+E Moisturizer Orange Blend | Pigmentation",
        sPrice:"Rs: 595.00",
        nPrice:"Rs: 495.00"
    },
    {
        img_url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_15_1.jpg?v=1661764748",
        rating:"⭐ 4.7 / 5",
        stock:"  (156)",
        name:"CICA Niacinamide Gel With Hyaluronic | Reduces Acne ",
        sPrice:"Rs: 495.00",
        nPrice:"Rs: 470.00"  
    },
    {
        img_url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/WATER_TONER.jpg?v=1658564108",
        rating:"⭐ 4.7 / 5",
        stock:"  (248)",
        name:"Vitamin E Lip Mask , Butter & Almond | & Vitamin E.",
        sPrice:"Rs: 445.00",
        nPrice:"Rs: 422.00"    
    }
   
]

// console.log(dataOne)



function visibleData(data){
    data.map((elem)=>{
        let box = document.createElement("div")
        box.setAttribute("class","card")
        


        let cardImage = document.createElement("div")
        cardImage.setAttribute("class","card-image")


        let prodImg = document.createElement("img")
        prodImg.setAttribute("src",elem.img_url)

        cardImage.append(prodImg)
        



        let cardContent = document.createElement("div")
        cardContent.setAttribute("class","card-content")


        let prodHead = document.createElement("h6")
        prodHead.innerText=elem.rating+" "
        let prodStock = document.createElement("span")
        prodStock.innerText=elem.stock

        prodHead.append(prodStock)

        let prodDesc = document.createElement("p")
        prodDesc.innerText=elem.name


        let prodWholePrice = document.createElement("div")
        prodWholePrice.setAttribute("id","prodWHolePrice")
        let prodSPrice = document.createElement("div")
        prodSPrice.innerText=elem.sPrice
        let prodNPrice = document.createElement("div")
        prodNPrice.innerText=elem.nPrice

        prodWholePrice.append(prodSPrice,prodNPrice)



        let addButton = document.createElement("button")
        addButton.innerText="Add to Cart"
        addButton.addEventListener("click",()=>{
            BagArr.push(elem)
            // console.log(BagArr)
            localStorage.setItem("BagItems", JSON.stringify(BagArr));
        })





        cardContent.append(prodHead,prodDesc,prodWholePrice,addButton)

    
        box.append(cardImage,cardContent)
        document.querySelector(".card-wrapper").append(box)
    })
}

visibleData(dataOne)




let dataTwo = [
    {
        img_url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Untitled-1_25_1_1.jpg?v=1661765679",
        rating:"⭐ 4.7 / 5",
        stock:"  (58)",
        name:"20% Vitamin C Serum with  Ferulic Acid| Fades Royal",
        sPrice:"Rs: 665.00",
        nPrice:"Rs: 499.00"

     },
    {
        img_url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Untitled-1_3_8124891e-d162-491c-b41e-43ea643926f1.jpg?v=1661765407",
        rating:"⭐ 4.8 / 5",
        stock:"  (275)",
        name:"Vitamin C+E Moisturizer Orange Blend | Pigmentation",
        sPrice:"Rs: 595.00",
        nPrice:"Rs: 565.00"
    },
    {
        img_url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/LIPMASKW_APPLI_1.jpg?v=1661765602",
        rating:"⭐ 4.7 / 5",
        stock:"  (156)",
        name:"CICA Niacinamide Gel With Hyaluronic | Reduces Acne ",
        sPrice:"Rs: 495.00",
        nPrice:"Rs: 470.00"  
    },
    {
        img_url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/PROBIOTICS_1_1_1_1_1_e0123849-0a5d-4c37-9ef6-96ad3836c842.jpg?v=1660732568",
        rating:"⭐ 4.7 / 5",
        stock:"  (248)",
        name:"Vitamin E Lip Mask , Butter & Almond  |  & Vitamin E.",
        sPrice:"Rs: 445.00",
        nPrice:"Rs: 422.00"    
    }
   
]

// console.log(dataTwo)



function visibleDataTwo(data){
    data.map((elem)=>{
        let box = document.createElement("div")
        box.setAttribute("class","card")
        


        let cardImage = document.createElement("div")
        cardImage.setAttribute("class","card-image")


        let prodImg = document.createElement("img")
        prodImg.setAttribute("src",elem.img_url)

        cardImage.append(prodImg)
        



        let cardContent = document.createElement("div")
        cardContent.setAttribute("class","card-content")


        let prodHead = document.createElement("h6")
        prodHead.innerText=elem.rating+" "
        let prodStock = document.createElement("span")
        prodStock.innerText=elem.stock

        prodHead.append(prodStock)

        let prodDesc = document.createElement("p")
        prodDesc.innerText=elem.name


        let prodWholePrice = document.createElement("div")
        prodWholePrice.setAttribute("id","prodWHolePrice")
        let prodSPrice = document.createElement("div")
        prodSPrice.innerText=elem.sPrice
        let prodNPrice = document.createElement("div")
        prodNPrice.innerText=elem.nPrice

        prodWholePrice.append(prodSPrice,prodNPrice)



        let addButton = document.createElement("button")
        addButton.innerText="Add to Cart"
        addButton.addEventListener("click",()=>{
            BagArr.push(elem)
            // console.log(BagArr)
            localStorage.setItem("BagItems", JSON.stringify(BagArr));
        })


        cardContent.append(prodHead,prodDesc,prodWholePrice,addButton)

    
        box.append(cardImage,cardContent)
        document.querySelector(".card-wrapperTwo").append(box)
    })
}

visibleDataTwo(dataTwo)



let dataThree = [
    {
        img_url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1-Green-Clay-Mask_9c094a0e-35b9-4b79-9a0a-8cf2bba91695.jpg?v=1661765543",
        rating:"⭐ 4.7 / 5",
        stock:"  (58)",
        name:"20% Vitamin C Serum with  Ferulic Acid| Fades Royal",
        sPrice:"Rs: 665.00",
        nPrice:"Rs: 499.00"

     },
    {
        img_url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/NIACINAMIDE_1_72e71c84-c5af-4edb-97aa-f429f39b0d4a.jpg?v=1661765640",
        rating:"⭐ 4.8 / 5",
        stock:"  (275)",
        name:"Vitamin C+E Moisturizer Orange Bend | Pigmentation",
        sPrice:"Rs: 595.00",
        nPrice:"Rs: 565.00"
    },
    {
        img_url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/nightcream_2_2e3e7434-5b2f-4cf6-aef9-ade90482eea2.png?v=1658906872",
        rating:"⭐ 4.7 / 5",
        stock:"  (156)",
        name:"CICA Niacinamide Gel With Hyaluronic | Reduces Acne ",
        sPrice:"Rs: 495.00",
        nPrice:"Rs: 470.00"  
    },
    {
        img_url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/WATERMELONWASH_1_1.jpg?v=1661765105",
        rating:"⭐ 4.7 / 5",
        stock:"  (248)",
        name:"Vitamin E Lip Mask , Butter & Almond  |  & Vitamin E.",
        sPrice:"Rs: 445.00",
        nPrice:"Rs: 422.00"    
    }
   
]

// console.log(dataThree)



function visibleDataThree(data){
    data.map((elem)=>{
        let box = document.createElement("div")
        box.setAttribute("class","card")
        


        let cardImage = document.createElement("div")
        cardImage.setAttribute("class","card-image")


        let prodImg = document.createElement("img")
        prodImg.setAttribute("src",elem.img_url)

        cardImage.append(prodImg)
        



        let cardContent = document.createElement("div")
        cardContent.setAttribute("class","card-content")


        let prodHead = document.createElement("h6")
        prodHead.innerText=elem.rating+" "
        let prodStock = document.createElement("span")
        prodStock.innerText=elem.stock

        prodHead.append(prodStock)

        let prodDesc = document.createElement("p")
        prodDesc.innerText=elem.name


        let prodWholePrice = document.createElement("div")
        prodWholePrice.setAttribute("id","prodWHolePrice")
        let prodSPrice = document.createElement("div")
        prodSPrice.innerText=elem.sPrice
        let prodNPrice = document.createElement("div")
        prodNPrice.innerText=elem.nPrice

        prodWholePrice.append(prodSPrice,prodNPrice)



        let addButton = document.createElement("button")
        addButton.innerText="Add to Cart"
        addButton.addEventListener("click",()=>{
            BagArr.push(elem)
            // console.log(BagArr)
            localStorage.setItem("BagItems", JSON.stringify(BagArr));
        })


        cardContent.append(prodHead,prodDesc,prodWholePrice,addButton)

    
        box.append(cardImage,cardContent)
        document.querySelector(".card-wrapperThree").append(box)
    })
}

visibleDataThree(dataThree)






let Bagproducts = JSON.parse(localStorage.getItem("BagItems"));
document.querySelector("#counting").innerText = Bagproducts.length

function visibleDataFour(data){
    data.map((elem,i)=>{
        let box = document.createElement("div")
        box.setAttribute("class","card")
        


        let cardImage = document.createElement("div")
        cardImage.setAttribute("class","card-image")


        let prodImg = document.createElement("img")
        prodImg.setAttribute("src",elem.img_url)

        cardImage.append(prodImg)
        



        let cardContent = document.createElement("div")
        cardContent.setAttribute("class","card-content")


        let prodHead = document.createElement("h6")
        prodHead.innerText=elem.rating+" "
        let prodStock = document.createElement("span")
        prodStock.innerText=elem.stock

        prodHead.append(prodStock)

        let prodDesc = document.createElement("p")
        prodDesc.innerText=elem.name


        let prodWholePrice = document.createElement("div")
        prodWholePrice.setAttribute("id","prodWHolePrice")
        let prodSPrice = document.createElement("div")
        prodSPrice.innerText=elem.sPrice
        let prodNPrice = document.createElement("div")
        prodNPrice.innerText=elem.nPrice

        prodWholePrice.append(prodSPrice,prodNPrice)



        let delButton = document.createElement("button")
        delButton.innerText="Delete item"
        delButton.addEventListener("click",(event)=>{
            event.target.parentNode.remove()
            Bagproducts.splice(i,1)
            localStorage.setItem("BagItems",JSON.stringify(Bagproducts))  
        })


        cardContent.append(prodHead,prodDesc,prodWholePrice)

    
        box.append(cardImage,cardContent,delButton)
        document.querySelector(".card-wrapperFour").append(box)
    })
}
// visibleDataFour(Bagproducts)
console.log(visibleDataFour(Bagproducts))




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






// cart popup
document.querySelector("#popuxyz").addEventListener("click",()=>{
    document.querySelector("body").style.overflowY="hidden"
})

document.querySelector("#closexxx").addEventListener("click",()=>{
    document.querySelector("body").style.overflowY="visible"
})

document.querySelector("#checkoutnow").addEventListener("click",()=>{
    document.querySelector("body").style.overflowY="visible"
})



function JSalert(){
	swal("We Will launching this Feature soon.. ✌️");
    // alert("we will")
}