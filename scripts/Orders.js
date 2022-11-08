import { getOrders, getMetals , getSizes , getStyles } from "./database.js"

const metals = getMetals();
const sizes = getSizes();
const styles = getStyles();
const order = getOrders();

/* Cannot read properties of undefined, orders.js:36. For some reason its never 
actually looking at the metalId property, and whenever I edit the code to make
it do that, it doesn't use the user inputs, just the original array */

/*const foundMetal = metals.find(
    (metal) => {
        return metal.id === order.metalId
    }

)

const foundSize = sizes.find(
    (size) => {
        return size.id === order.sizeId   
    }
)

const foundStyle = styles.find(
    (style) => {
        return style.id === order.styleId
    }
)

const totalCost = foundMetal.price + foundSize.price + foundStyle.price

const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})*/

const buildOrderListItem = (order) => {
    return `<li>
        Order #${order.id} cost ${order.timestamp/*Should be costString*/}
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

