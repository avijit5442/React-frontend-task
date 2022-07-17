import React from 'react'
import axios from "axios"
export default function DeleteComponent() {
    function deleteDetails(){
        axios.delete("https://reqres.in/api/users/2")
             .then(alert(`data deleted successfully`))
    }
  return (
    <div>
        <button onClick={deleteDetails} className="btn btn-success m-2">Delete Entry</button>
    </div>
  )
}
