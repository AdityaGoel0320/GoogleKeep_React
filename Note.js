import React from 'react'

export default function Note(props) {
    let deletenote = ()=>{
        props.deleteitem(props.id) ;
    }
  return (
    <div>
        <h2>{props.title}</h2>
        <p> {props.content} </p>
        <button onClick={deletenote}>Delete it</button>
    </div>

    


  )
}
