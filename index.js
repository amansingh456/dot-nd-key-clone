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
        img_url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Untitled-1_3_1_1_360x.png?v=1666088953",
        rating:"⭐ 4.7 / 5",
        stock:"  (58)",
        name:"20% Vitamin C Serum with  Ferulic Acid| Fades Royal",
        sPrice:"Rs: 665.00",
        nPrice:"Rs: 499.00"

     },
    {
        img_url:"https://www.dotandkey.com/cdn/shop/files/vitcsunscreen_1747d970-e108-40f7-93dd-d5818262c85d_360x.jpg?v=1684820542",
        rating:"⭐ 4.8 / 5",
        stock:"  (275)",
        name:"Vitamin C+E Moisturizer Orange Blend | Pigmentation",
        sPrice:"Rs: 595.00",
        nPrice:"Rs: 495.00"
    },
    {
        img_url:"https://www.dotandkey.com/cdn/shop/files/watermelonsun_0e7c7b10-c99f-42ea-ae8c-cde3a017947e_360x.jpg?v=1684821837",
        rating:"⭐ 4.7 / 5",
        stock:"  (156)",
        name:"CICA Niacinamide Gel With Hyaluronic | Reduces Acne ",
        sPrice:"Rs: 495.00",
        nPrice:"Rs: 470.00"  
    },
    {
        img_url:"https://www.dotandkey.com/cdn/shop/files/vitcnew_360x.jpg?v=1684820620",
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
        img_url:"https://www.dotandkey.com/cdn/shop/files/72hr_360x.jpg?v=1684819946s",
        rating:"⭐ 4.7 / 5",
        stock:"  (58)",
        name:"20% Vitamin C Serum with  Ferulic Acid| Fades Royal",
        sPrice:"Rs: 665.00",
        nPrice:"Rs: 499.00"

     },
    {
        img_url:"https://www.dotandkey.com/cdn/shop/files/cicaoilfree_360x.jpg?v=1684822268",
        rating:"⭐ 4.8 / 5",
        stock:"  (275)",
        name:"Vitamin C+E Moisturizer Orange Blend | Pigmentation",
        sPrice:"Rs: 595.00",
        nPrice:"Rs: 565.00"
    },
    {
        img_url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Copyofretinol_540x_e4461228-4859-4696-b86c-6c692d28ac01_360x.webp?v=1668517191",
        rating:"⭐ 4.7 / 5",
        stock:"  (156)",
        name:"CICA Niacinamide Gel With Hyaluronic | Reduces Acne ",
        sPrice:"Rs: 495.00",
        nPrice:"Rs: 470.00"  
    },
    {
        img_url:"https://www.dotandkey.com/cdn/shop/files/lipmask_360x.jpg?v=1684821528",
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
        img_url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Copyofbaku_360x.jpg?v=1666354301",
        rating:"⭐ 4.7 / 5",
        stock:"  (58)",
        name:"20% Vitamin C Serum with  Ferulic Acid| Fades Royal",
        sPrice:"Rs: 665.00",
        nPrice:"Rs: 499.00"

     },
    {
        img_url:"https://www.dotandkey.com/cdn/shop/files/strawberry_f623e305-a335-47ac-9aa1-c61279335834_360x.jpg?v=1684821643",
        rating:"⭐ 4.8 / 5",
        stock:"  (275)",
        name:"Vitamin C+E Moisturizer Orange Bend | Pigmentation",
        sPrice:"Rs: 595.00",
        nPrice:"Rs: 565.00"
    },
    {
        img_url:"https://www.dotandkey.com/cdn/shop/files/cactus_360x.jpg?v=1684820723",
        rating:"⭐ 4.7 / 5",
        stock:"  (156)",
        name:"CICA Niacinamide Gel With Hyaluronic | Reduces Acne ",
        sPrice:"Rs: 495.00",
        nPrice:"Rs: 470.00"  
    },
    {
        img_url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/hand_36e6c31e-1329-4ad8-9f9b-8141bb2a4836_360x.jpg?v=1668678249",
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