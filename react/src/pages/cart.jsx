import React, { Component } from 'react';
import Cart from "../components/cart/list";
import { cartStore } from '../components/product';

class CartPage extends Component {
    state = {};
    componentDidMount() {
        this.setState({ product: cartStore.getState() });
        this.unsubscribe = cartStore.subscribe(() => this.setState({ product: cartStore.getState() }));
    }
    componentWillUnmount() {
        this.unsubscribe()
    }
    render() {
        return (
            <div className='mt-5'>
                <Cart product={this.state.product} />
            </div>
        )
    }
}
export default CartPage;