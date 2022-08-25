let dataOne = [
    {
        img_url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/20VITC_2.png?v=1658907052",
        rating:"⭐ 4.7 / 5",
        stock:"  (58)",
        name:"20% Vitamin C Serum with  Ferulic Acid| Fades Royal",
        sPrice:"Rs: 665.00",
        nPrice:"Rs: 499.00"

     },
    {
        img_url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/CICASUNSCREEN_2.jpg?v=1656934758",
        rating:"⭐ 4.8 / 5",
        stock:"  (275)",
        name:"Vitamin C+E Moisturizer Blood Orange | Pigmentation",
        sPrice:"Rs: 595.00",
        nPrice:"Rs: 565.00"
    },
    {
        img_url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_15.webp?v=1658907103",
        rating:"⭐ 4.7 / 5",
        stock:"  (156)",
        name:"CICA Niacinamide Gel With Hyaluronic | Reduces Acne ",
        sPrice:"Rs: 495.00",
        nPrice:"Rs: 470.00"  
    },
    {
        img_url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/WATERTONER_2.png?v=1658907972",
        rating:"⭐ 4.7 / 5",
        stock:"  (248)",
        name:"Vitamin E Lip Mask , Butter & Almond  Blood  & Vitamin E.",
        sPrice:"Rs: 445.00",
        nPrice:"Rs: 422.00"    
    }
   
]

console.log(dataOne)



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


        cardContent.append(prodHead,prodDesc,prodWholePrice,addButton)

    
        box.append(cardImage,cardContent)
        document.querySelector(".card-wrapper").append(box)
    })
}

visibleData(dataOne)




let dataTwo = [
    {
        img_url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/LIPMASKW_APPLI_1.png?v=1658907666",
        rating:"⭐ 4.7 / 5",
        stock:"  (58)",
        name:"20% Vitamin C Serum with  Ferulic Acid| Fades Royal",
        sPrice:"Rs: 665.00",
        nPrice:"Rs: 499.00"

     },
    {
        img_url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Untitled-1_25_1.jpg?v=1660731137",
        rating:"⭐ 4.8 / 5",
        stock:"  (275)",
        name:"Vitamin C+E Moisturizer Blood Orange | Pigmentation",
        sPrice:"Rs: 595.00",
        nPrice:"Rs: 565.00"
    },
    {
        img_url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Untitled-1_3_8124891e-d162-491c-b41e-43ea643926f1.png?v=1658906811",
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
        name:"Vitamin E Lip Mask , Butter & Almond  Blood  & Vitamin E.",
        sPrice:"Rs: 445.00",
        nPrice:"Rs: 422.00"    
    }
   
]

console.log(dataTwo)



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


        cardContent.append(prodHead,prodDesc,prodWholePrice,addButton)

    
        box.append(cardImage,cardContent)
        document.querySelector(".card-wrapperTwo").append(box)
    })
}

visibleDataTwo(dataTwo)



let dataThree = [
    {
        img_url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/LIPMASKW_APPLI_1.png?v=1658907666",
        rating:"⭐ 4.7 / 5",
        stock:"  (58)",
        name:"20% Vitamin C Serum with  Ferulic Acid| Fades Royal",
        sPrice:"Rs: 665.00",
        nPrice:"Rs: 499.00"

     },
    {
        img_url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Untitled-1_25_1.jpg?v=1660731137",
        rating:"⭐ 4.8 / 5",
        stock:"  (275)",
        name:"Vitamin C+E Moisturizer Blood Orange | Pigmentation",
        sPrice:"Rs: 595.00",
        nPrice:"Rs: 565.00"
    },
    {
        img_url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Untitled-1_3_8124891e-d162-491c-b41e-43ea643926f1.png?v=1658906811",
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
        name:"Vitamin E Lip Mask , Butter & Almond  Blood  & Vitamin E.",
        sPrice:"Rs: 445.00",
        nPrice:"Rs: 422.00"    
    }
   
]

console.log(dataThree)



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


        cardContent.append(prodHead,prodDesc,prodWholePrice,addButton)

    
        box.append(cardImage,cardContent)
        document.querySelector(".card-wrapperThree").append(box)
    })
}

visibleDataThree(dataThree)








 



