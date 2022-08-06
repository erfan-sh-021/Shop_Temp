import React, { Fragment } from "react";
import { addToCart, productService } from "../components/product";
import { CreateComment, CommentsList } from "../components/comment";
import { cartStore } from "../components/product";

export class Detail extends React.Component {
  state = { data: undefined };

  async componentDidMount() {
    let id = this.props.match.params.id;
    const { data } = await productService.getProductById(id);
    this.setState({ data });
    this.unsubscribe = cartStore.subscribe(()=>{
      console.log(cartStore.getState());
    })
  }

  componentWillUnmount(){
    this.unsubscribe(); 
  }

  async submitComment(comment) {
   const response = await productService.addComment(this.state.data.id, comment);
   if(response.status === 200) {
    const {data} = await productService.getComments(this.state.data.id);
    this.setState({data: {...this.state.data , comments: data }})
   }
  }
  handleAddToCart(){
    cartStore.dispatch(addToCart(this.state.data));
  }
  render() {
    const data = this.state.data;
    if (!data) {
      return <div>Loading...</div>;
    }
    return (
      <Fragment>
        <div className="row pt-5">
          <div className="col-5 " >
            <img src={data.pic}  style={{maxWidth:'400px'}}/>
          </div>
          <div className="col-7 ">
            <h1 className="text-center pb-3">{data.title}</h1>
            <p className="text-left" style={styles.paragraph}>{data.desc}</p>
            <strong  className="mt-4 "  style={styles.price}>{data.price}</strong>
            <br/>
            <button onClick={this.handleAddToCart.bind(this)} className="mt-5 btn btn-warning btn-lg " style={{fontWeight:'bold'}}>افزودن به سبد خرید</button>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-10 mx-auto">
            <CommentsList comments={data.comments || []} />
            <hr className="my-5" />
            <CreateComment onComment={this.submitComment.bind(this)} />
          </div>
        </div>
      </Fragment>
    );
  }
}

const styles = {
  price: {
    color: "green",
    fontSize: 24,
    
  },
  paragraph:{
    direction:'rtl',
    width:'600px'
    
  }
};
