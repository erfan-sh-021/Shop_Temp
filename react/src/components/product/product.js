import React from "react";
import { Link } from 'react-router-dom';

export function Product({ data }) {
  return (
    <div className="card mt-5 ">
      <div className="container ">
      <img style={{height:'210px'}} src={data.pic} className="img-fluid card-img-top pt-2" alt={data.title} />
      <div className="card-body" style={{padding:'15px 0 5px 0'}}>
        <h5 className="card-title" style={{height:'70px',marginBottom:'0'}}>{data.title}</h5>
        <hr style={{margin:'0 0 15px 0', background:'red'}}/>
        <p className="text-success" style={{fontSize: 20, fontWeight: 700,marginBottom:'5px'}}>{data.price}</p>
        </div>
      </div>
      <Link to={"/detail/" + data.id}><span className="btn btn-primary w-100">جزعیات</span></Link>
    </div>
  );
}
