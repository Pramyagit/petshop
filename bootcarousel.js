let items = document.querySelectorAll('.slides .items')

items.forEach((el) => {
    const minPerSlide = 6
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})
// product
let product = document.querySelectorAll('.slide2 .item2')

product.forEach((el) => {
    const minPerSlide = 6
    let next1 = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next1) {
            // wrap carousel by using first child
        	next1 = product[0]
      	}
        let cloneChild = next1.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next1 = next1.nextElementSibling
    }
})




// navbar/footer common
const nav=document.querySelector(".head")
fetch("header.html")
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data

 })


//  footer common
const foot=document.querySelector(".footer")
fetch("footer.html")
.then(res=>res.text())
.then(data=>{
    foot.innerHTML=data

 })