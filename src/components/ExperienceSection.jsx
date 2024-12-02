import { useState } from "react"

function ExperienceSection({printMode}){
    const [editMode,setEditMode] = useState(true)
    const [experienceInfo,setExperienceInfo] = useState({
        company:'Bachelor company',
        position:'Al-Andalus University for Science & Technology',
        location:'',
        from:'2017',
        to:'2021',
        responsibilities:'Management Information Systems',
       
    });

    function setData(e){
        e.preventDefault();
        const form = e.target;
        const newExperienceData = {
            company:form.company.value,
            position:form.position.value,
            location:form.location.value,
            from:form.from.value,
            to:form.to.value,
            responsibilities:form.responsibilities.value,
        }
        for (const key in newExperienceData){
                // if at least on field have data
                // display user data
            if(newExperienceData[key].trim() !==""){
                 setExperienceInfo(newExperienceData)
            }
        }
        // else 
        //display defualts
        setEditMode(false);
       
    }
   
 if(editMode && !printMode){
    return (
        <div>
            <form onSubmit={setData} >
                <div>
                    <label htmlFor="company">company</label>
                    <input type="text" name="name"  id="company" placeholder={experienceInfo.company} />
                </div>
                <div>
                    <label htmlFor="position">position</label>
                    <input type="text" name="position"  id="position" placeholder={experienceInfo.position} />
                </div>
                <div>
                    <label htmlFor="location">location</label>
                    <input type="text" name="location"  id="location" placeholder={experienceInfo.location} />
                </div>
                <div>
                    <label htmlFor="from">from</label>
                    <input type="text" name="from"  id="from" placeholder={experienceInfo.from} />
                </div>
                <div>
                    <label htmlFor="to">to</label>
                    <input type="text" name="to"  id="to" placeholder={experienceInfo.to} />
                </div>
                <div>
                    <label htmlFor="responsibilities">responsibilities</label>
                    <input type="text" name="responsibilities"  id="responsibilities" placeholder={experienceInfo.responsibilities} />
                </div>
               
                
                <button type="submit">submit</button>
            </form>
        </div>
    )}else{
     return(
        <div>
            <h3>{experienceInfo.company}</h3>
            <p>{experienceInfo.position}</p>
            <p>{experienceInfo.location}</p>
            <p>{experienceInfo.from}</p>
            <p>{experienceInfo.to}</p>
            <p>{experienceInfo.responsibilities}</p>
          
            <button onClick={()=>setEditMode(true)}>edit</button>
        </div>
     )
    }

    
}

export default ExperienceSection