let dataOne = [
    {
        img_url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/20VITC_2.png?v=1658907052",
        rating:"⭐ 4.7/5",
        stock:"(58)",
        name:"20% Vitamin C Serum with Blood Orange & Ferulic Acid | Fades Pigmentation",
        sPrice:"665.00",
        nPrice:"499.00"

    },
    {
        img_url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Untitled-1_25_1.jpg?v=1660731137",
        rating:"⭐ 4.8/5",
        stock:"(275)",
        name:"Vitamin C+E Moisturizer With Sicilian Blood Orange & Vitamin E | Pigmentation",
        sPrice:"595.00",
        nPrice:"565.00"
    },
    {
        img_url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Untitled-1_3_8124891e-d162-491c-b41e-43ea643926f1.png?v=1658906811",
        rating:"⭐ 4.7/5",
        stock:"(156)",
        name:"CICA Niacinamide Night Gel  With Green Tea, Tree Oil & Hyaluronic| Reduces Acne ",
        sPrice:"495.00",
        nPrice:"470.00"  
    },
    {
        img_url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/LIPMASKW_APPLI_1.png?v=1658907666",
        rating:"⭐ 4.7/5",
        stock:"(248)",
        name:"Vitamin C+E Lip Sleeping Mask , Butter & Almond Sicilian Blood  & Vitamin E.",
        sPrice:"445.00",
        nPrice:"422.00"    
    }
   
]

console.log(dataOne)



function visibleData(data){
    data.map((elem)=>{
        let box = document.createElement("div")

        let prodImg = document.createElement("img")
        prodImg.setAttribute("src",elem.img_url)



        let prodHead = document.createElement("h6")
        prodHead.innerText=elem.rating+" "
        let prodStock = document.createElement("span")
        prodStock.innerText=elem.stock



        let prodDesc = document.createElement("p")
        prodDesc.innerText=elem.name


        let prodWholePrice = document.createElement("div")
        prodWholePrice.setAttribute("id","prodWHolePrice")


        let prodSPrice = document.createElement("div")
        prodSPrice.innerText=elem.sPrice
        let prodNPrice = document.createElement("div")
        prodNPrice.innerText=elem.nPrice



        let addButton = document.createElement("button")
        addButton.innerText="Add to Cart"



        prodWholePrice.append(prodSPrice,prodNPrice)
        prodHead.append(prodStock)
        box.append(prodImg,prodHead,prodDesc,prodWholePrice,addButton)
        document.querySelector("#shopourimgOne").append(box)
    })
}

visibleData(dataOne)



let dataTwo = [
    {
        img_url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/PROBIOTICS_1_1_1_1_1_e0123849-0a5d-4c37-9ef6-96ad3836c842.jpg?v=1660732568",
        rating:"⭐ 4.7/5",
        stock:"(265)",
        name:"72 HR Hydrating Probiotic Gel For Face With Japanese Rice Water | For Soft Skin.",
        sPrice:"595.00",
        nPrice:"535.00" 
    },
    {
        img_url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1-Green-Clay-Mask.png?v=1658907624",
        rating:"⭐ 4.7/5",
        stock:"(496)",
        name:"Salicylic & French Clay Face Mask With Matcha Tea & CICA |  Blemishes.",
        sPrice:"550.00",
        nPrice:"499.00" 
    },
    {
        img_url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/NIACINAMIDE_1.png?v=1658907926",
        rating:"⭐ 4.6/5",
        stock:"(239)",
        name:"10% Niacinamide Face Serum With Zinc  Spot Corrector for Acne | Acne Prone Skin.",
        sPrice:"665.00",
        nPrice:"499.00" 
    },
    {
        img_url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Untitled-1_3_8124891e-d162-491c-b41e-43ea643926f1.png?v=1658906811",
        rating:"⭐ 4.7/5",
        stock:"(156)",
        name:"CICA Niacinamide Night Gel  With Green Tea, Tree Oil & Hyaluronic| Reduces Acne ",
        sPrice:"495.00",
        nPrice:"470.00"  
    }
]


function visibleDataTwo(dataTwo){
    dataTwo.map((elem)=>{
        let box = document.createElement("div")

        let prodImg = document.createElement("img")
        prodImg.setAttribute("src",elem.img_url)



        let prodHead = document.createElement("h6")
        prodHead.innerText=elem.rating+" "
        let prodStock = document.createElement("span")
        prodStock.innerText=elem.stock



        let prodDesc = document.createElement("p")
        prodDesc.innerText=elem.name


        let prodWholePrice = document.createElement("div")
        prodWholePrice.setAttribute("id","prodWHolePrice")


        let prodSPrice = document.createElement("div")
        prodSPrice.innerText=elem.sPrice
        let prodNPrice = document.createElement("div")
        prodNPrice.innerText=elem.nPrice



        let addButton = document.createElement("button")
        addButton.innerText="Add to Cart"



        prodWholePrice.append(prodSPrice,prodNPrice)
        prodHead.append(prodStock)
        box.append(prodImg,prodHead,prodDesc,prodWholePrice,addButton)
        document.querySelector("#shopourimgTwo").append(box)
    })
}

visibleDataTwo(dataTwo)