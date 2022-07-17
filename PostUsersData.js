import {useFormik} from "formik"
import axios from "axios"
export default function PostUsersData(){
    const formik=useFormik({
        initialValues:{
            firstname:"",
            lastname:'',
            email:'',
            avatar:'',
        },
        onSubmit:values=>{
            axios.post("https://reqres.in/api/users/2 ",values)
        }
    })
    return(
        <>
        <form className="container" onSubmit={formik.handleSubmit}>
            <dl>
                <dt>First Name</dt>
                <dd><input type="text" name="firstname" onChange={formik.handleChange} value={formik.values.firstname}/></dd>
                <dt>Last Name</dt>
                <dd><input type="text"name="lastname" onChange={formik.handleChange} value={formik.values.lastname}/></dd>
                <dt>Email</dt>
                <dd><input type="text"name="email" onChange={formik.handleChange} value={formik.values.email}/></dd>
                <dt>Profile Photo</dt>
                <dd><input type="file"name="avatar" onChange={formik.handleChange} value={formik.values.avatar}/></dd>
                <button className="btn btn-success">Register</button>
            </dl>
        </form>
        </>
    )
}