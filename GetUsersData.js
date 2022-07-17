import {useState,useEffect} from "react"
import axios from "axios"
export default function GetUsersData(){
    const [users,setUsers]=useState([])
    useEffect(()=>{
        axios.get("https://reqres.in/api/users")
             .then(response=>
                setUsers(response.data.data)
                )
                
    },[])
    return(
        <>
        <h4>Users are</h4>
        
            <ol>
                {users.map(user=>
                <li key={user.id}>
                    <p>{user.first_name + " " + user.last_name}</p>
                    <img src={user.avatar}height="200px" width="250px"/>
                    <hr/>
                </li>
                    )}
              
            </ol>
        </>
    )
}