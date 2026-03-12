function Orders(){
    return(
        <div>
            {orders.map((order) => (
                <div>
                    <h4>Email:{order.email}</h4>
                    <h4>{order.orderValue}</h4>
                    <h4>Items:{order.items}</h4>
                    <h4>Status:{product.status}</h4>
                    <p>
                        <button onClick={() => placeOrder(order)}>Place Order</button>
                    </p>
                </div>
            ))}
            
        </div>
    );
}
export default Orders;
