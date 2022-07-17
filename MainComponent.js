import PostUsersData from "./PostUsersData";
import GetUsersData from "./GetUsersData"
import PutComponent from "./PutComponent";
import DeleteComponent from "./DeleteComponent";

export default function MainComponent(){
   return(
    <div className="row">
        <div className="col-3">
              <PostUsersData/>  
        </div>
        <div className="col-4">
              <GetUsersData />  
        </div>
        <div className="col-2">
        <PutComponent/>
        </div>
        <div className="col-2">
           <DeleteComponent/> 
        </div>

    </div>
   )
}