import React from 'react';
import { cartStore, removeFromCrat } from '../product';
export default function Cart({ product }) {
    if (!product || !product.length) {
        return <div style={{ marginTop: 100, fontSize: 60 }} className='text-center'>cart is empty</div>
    }

    const removeaHandler = (product) => {
        cartStore.dispatch(removeFromCrat(product));
    }
    
    return (
        < table className="table" >
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Pick</th>
                    <th scope="col">Tittle</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {product.map((product, index) => (
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td ><img width='50' src={product.pic} /></td>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                        <td><button onClick={() => removeaHandler(product)} className='btn btn-danger'>Remove</button></td>
                    </tr>
                ))}
            </tbody>
        </table >
    )
}
