const products = [
    {
        id: 1,
        name: 'Cooking oil',
        price: 10.5,
        type: 'grocery',
        image: '../images/Cooking oil.png',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery',
        image: '../images/Pasta.png'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        image: '../images/Instant cupcake mixture.png',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty',
        image: '../images/All-in-one.png'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty',
        image: '../images/Zero Make-up Kit.png'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty',
        image: '../images/Lip Tints.png',
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes',
        image: '../images/Lawn Dress.png'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes',
        image: '../images/Lawn-Chiffon Combo.png'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes',
        image: '../images/Toddler Frock.png'
    }
]

const cart = []

const total = 0

// Exercise 1
const buy = (id) => {
    const product = products.find(p => p.id === id)

    if (!product) return

    const cartItem = cart.find(p => p.id === id)

    if (cartItem) {
        cartItem.quantity += 1
    } else {
        const productToAdd = { ...product, quantity: 1 }
        cart.push(productToAdd)
    }

    console.log(cart)

    applyPromotionsCart()
    printCart()

    document.getElementById('count_product').textContent = cart.reduce((acc, item) => acc + item.quantity, 0)
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const id = parseInt(button.dataset.productId)
        buy(id)
    })
})

// Exercise 2
const cleanCart = () => {
    cart.length = 0

    printCart()
    document.getElementById('count_product').textContent = '0'
    document.getElementById('total_price').textContent = '0'
}

document.getElementById('clean-cart').addEventListener('click', cleanCart)

// Exercise 3
const calculateTotal = () => {
    let total = 0

    cart.forEach(product => {
        total += product.price * product.quantity
    })

    return total
}

// Exercise 4
const applyPromotionsCart = () => {
    cart.forEach(product => {
        if (product.offer && product.quantity >= product.offer.number) {
            const discount = product.price * (product.offer.percent / 100)
            const discountedPrice = product.price - discount
            const subtotalWithDiscount = discountedPrice * product.quantity

            product.subtotalWithDiscount = parseFloat(subtotalWithDiscount.toFixed(2))
        } else {
            delete product.subtotalWithDiscount
        }
    })
}

// Exercise 5
function printCart() {
    const cartList = document.getElementById("cart_list")
    const totalPriceSpan = document.getElementById("total_price")

    cartList.innerHTML = ""

    let total = 0

    cart.forEach(product => {
        const tr = document.createElement("tr")
        const subtotal = product.subtotalWithDiscount || (product.price * product.quantity)
        total += subtotal

        tr.innerHTML = `
            <td><img src="${product.image}" alt="${product.name}" class="cart-image-product"/></td>
            <th scope="row">${product.name}</th>
            <td>$${product.price}</td>
            <td>
                <button class="btn btn-sm btn-outline-secondary decrease-qty" data-product-id="${product.id}">-</button>
                <span>${product.quantity}</span>
                <button class="btn btn-sm btn-outline-secondary increase-qty" data-product-id="${product.id}">+</button>
            </td>
            <td>$${subtotal.toFixed(2)}</td>
        `

        cartList.appendChild(tr)
    })

    totalPriceSpan.textContent = total.toFixed(2)

    document.querySelectorAll('.increase-qty').forEach(button => {
        button.addEventListener('click', () => {
            const id = parseInt(button.dataset.productId)
            increaseQuantity(id)
        })
    })

    document.querySelectorAll('.decrease-qty').forEach(button => {
        button.addEventListener('click', () => {
            const id = parseInt(button.dataset.productId)
            removeFromCart(id)
        })
    })
}

// ** Nivell II **

// Exercise 7
const removeFromCart = (id) => {
    const index = cart.findIndex(p => p.id === id)
    if (index !== -1) {
        if (cart[index].quantity > 1) {
            cart[index].quantity -= 1
        } else {
            cart.splice(index, 1)
        }

        applyPromotionsCart()
        printCart()
        document.getElementById('count_product').textContent = cart.reduce((acc, item) => acc + item.quantity, 0)
    }
}

const increaseQuantity = (id) => {
    const item = cart.find(p => p.id === id)
    if (item) {
        item.quantity += 1
        applyPromotionsCart()
        printCart()
        document.getElementById('count_product').textContent = cart.reduce((acc, item) => acc + item.quantity, 0)
    }
}

const open_modal = () => {
    printCart()
}