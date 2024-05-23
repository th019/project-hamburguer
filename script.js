const list = document.querySelector("ul")
const seeAll = document.querySelector(".seeAll-button")
const discont = document.querySelector(".discont-button")
const sum = document.querySelector(".sum-button")
const filtering = document.querySelector(".filter-button")



function newValue(value) {
    return new Intl.NumberFormat('pt-br', {
         style: 'currency',
     currency: 'BRL' 

    }).format(value)
}

const show = (productsArray) => {
    let myLi = ''

    productsArray.forEach(Poduct => {
        // += é uma abreviaçao de myLi + myLi = ``
        myLi += `       
            <li>
            <img src=${Poduct.src}>
            <p>${Poduct.name}</p>
            <p class="price"> ${newValue(Poduct.price)}</p>
            </li>
        `

    })
    list.innerHTML = myLi
}

const disconting = () => {

    const newPrice = products.map(item => ({
        /*spread operator */...item,
        price: item.price * 0.9
    }))

    show(newPrice)
}

const sumAll = () => {
    const total = products.reduce((acc, curr) => acc + curr.price, 0)
    list.innerHTML = `
     <li>
     <p>A soma de todos os itens do menu é </p>
     <p class="price"> ${newValue(total)}</p>
     </li>
     `

}

function filterAll() {
    const fill = products.filter(fill => fill.vegan)

    show(fill)

}

seeAll.addEventListener("click", () => show(products))
discont.addEventListener("click", disconting)
sum.addEventListener("click", sumAll)
filtering.addEventListener("click", filterAll)