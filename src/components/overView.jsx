import { useState } from "react";

function OverviewSection({printMode}){
    const [editMode,setEditMode] = useState(true)
    const [overview,setOverview] = useState({
        text:'Creative Frontend  developer Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, suscipit!'
    });

    function setData(e){
        e.preventDefault();
        const form = e.target;
        const newOverView = {
            text:form.text.value,
        }
        // if field have data
        // display user data
            if(newOverView.text.trim() !==""){
                 setOverview(newOverView)
            } 
        // else 
        //display defualts
        setEditMode(false);
       
    }
   

    if(editMode && !printMode){
        return(
        <>
            
            <form onSubmit={setData}>
            <label htmlFor="overview"></label>
             <textarea name="text" id="overview" placeholder={overview.text} cols="10" rows="5"></textarea>
             <button type="submit">submit</button>
           </form> 
        </>
        );  
    }else{
        return(
            <>
                <h3>Overview</h3>
                <p>{overview.text}</p>
                <button onClick={()=>setEditMode(true)}>edit</button>
            </>
        )
    }
}
export default OverviewSection