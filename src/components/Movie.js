import React from 'react'
export default function Movie(props) {
  return (
    <div className="card bg-light" style={{ width: "260px", display: "inline-block", marginBottom: "20px", padding: "5px" }}>
      <img className="card-img-top" src={props.poster} alt={props.title}></img>
      <div className="card-title font-weight-bold" >{props.title}</div>
      <div className="card-text text-capitalize font-weight-light">Type : {props.type}</div>
      <div className="card-text text-capitalize font-weight-light" >Genre: {props.genre}</div>
      <div className="card-text text-capitalize font-weight-light">Release Year: {props.year}</div>
    </div>
  )
}
