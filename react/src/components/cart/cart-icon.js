import React, { Component } from 'react';
import { cartStore } from '../product';

export default class CartIcon extends Component{
    state={}
    componentDidMount(){
        this.unsubscribe=cartStore.subscribe(()=> this.setState({count:cartStore.getState().length }))
    }
    componentWillUnmount(){
        this.unsubscribe();
    }
    render(){
        return(
         <div> 
            <img width={40} src='/images/cart.png'></img> 
            {this.state.count>0 && (<span
             style={{position: 'relative',top:-12,left:-10,fontSize:9,}}
              className='badge badge-danger badge-pill'>
                {this.state.count}
                </span>
                )}
        </div>
        )
    }
}