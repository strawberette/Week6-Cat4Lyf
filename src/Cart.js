import './App.css';


const Cart = (props) => {
    let tot = 0
    return (
        <div>
            <br />
            <h2>You shopping cart</h2>
            <p className={props.cartItems.length === 0 ? "show" : "hide"}>Your cart is empty</p>
            <table>
                <tbody>
            {props.cartItems.map((item, index) => {
                tot += parseFloat(item.price)
                return (
                    <tr key={index}>
                        <td>{item.breed}</td>
                        <td>{item.price}</td>
                    </tr>   
                )
            })}
                </tbody>
            </table>
            <p>Total: £{tot}</p>
        </div>

    )

}

export default Cart;