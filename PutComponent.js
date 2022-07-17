import React from 'react'
import axios from "axios"
export default function PutComponent() {
   var p=document.querySelector("p")
    let details={
        College:"BPUT,Odisha",
        State:"Odisha",
        Country:"India"
    }
    function put(){
        axios.put("https://reqres.in/api/users/2",details)
             .then((response)=>alert(`data updated on:${response.data.updatedAt}`),alert(`data updated is = University :${details.College + details.State + details.Country}`))
    }
  return (
    <div>
        <button onClick={put} className="btn btn-success m-2">Update with default</button>
        <p></p>
    </div>
  )
}
