//collect the elements
const priceitem_display = document.querySelector('.priceitem_display')
const quantity_display = document.querySelector('.quantity_display')
const totalprice_display = document.querySelector('.totalprice_display')
const itemimg = document.querySelector('.itemimg')
const itemdescription = document.querySelector('.itemdescription')

//get values for quantity and price per unit
const priceitem = sessionStorage.getItem('salesprice1')
const quantityitem = sessionStorage.getItem('quantityitem1')
const itemimg1 = sessionStorage.getItem('imgitem1')
const itemdescription1 =  sessionStorage.getItem ('itemddescription')

//calculate for the total price
const totalprice = (priceitem*quantityitem).toFixed(2)
/*
//this is good for one data/product
//print the price, quantity and total price in the collected item (shopping cart)
priceitem_display.innerHTML = `$ ${priceitem}`
quantity_display.innerHTML = `${quantityitem}`
totalprice_display.innerHTML = `$ ${totalprice}`
*/

//append image
let image = document.createElement('img')
image.src = sessionStorage.getItem('item_image')
image.style.width = "80px"

itemimg.append(image)

//append product description
let product = document.createElement('p')
product.innerHTML = itemdescription
itemdescription.append(product)

//append price
let productprice = document.createElement('p')
productprice.innerHTML =  priceitem
priceitem_display.append(productprice)

//append quantity
let totalquantity = document.createElement('p')
totalquantity.innerHTML = quantityitem
quantity_display.append(totalquantity)

//append total price
let pricetotal = document.createElement('p')
totalprice.innerHTML = totalprice
totalprice_display.append(totalprice)

