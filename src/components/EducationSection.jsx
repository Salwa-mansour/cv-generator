import { useState } from "react"

function EducationSection({printMode}){
    const [editMode,setEditMode] = useState(true)
    const [educationInfo,setEducationInfo] = useState({
        degree:'Bachelor Degree',
        school:'Al-Andalus University for Science & Technology',
        from:'2017',
        to:'2021',
        major:'Management Information Systems',
       
    });

    function setData(e){
        e.preventDefault();
        const form = e.target;
        const newEducationData = {
            degree:form.degree.value,
            school:form.school.value,
            from:form.from.value,
            to:form.to.value,
            major:form.major.value,
        }
        for (const key in newEducationData){
                // if at least on field have data
                // display user data
            if(newEducationData[key].trim() !==""){
                 setEducationInfo(newEducationData)
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
                    <label htmlFor="degree">degree</label>
                    <input type="text" name="name"  id="degree" placeholder={educationInfo.degree} />
                </div>
                <div>
                    <label htmlFor="school">school</label>
                    <input type="text" name="school"  id="school" placeholder={educationInfo.school} />
                </div>
                <div>
                    <label htmlFor="from">from</label>
                    <input type="text" name="from"  id="from" placeholder={educationInfo.from} />
                </div>
                <div>
                    <label htmlFor="to">to</label>
                    <input type="text" name="to"  id="to" placeholder={educationInfo.to} />
                </div>
                <div>
                    <label htmlFor="major">major</label>
                    <input type="text" name="major"  id="major" placeholder={educationInfo.major} />
                </div>
               
                
                <button type="submit">submit</button>
            </form>
        </div>
    )}else{
     return(
        <div>
            <h3>{educationInfo.degree}</h3>
            <p>{educationInfo.school}</p>
            <p>{educationInfo.from}</p>
            <p>{educationInfo.to}</p>
            <p>{educationInfo.major}</p>
          
            <button onClick={()=>setEditMode(true)}>edit</button>
        </div>
     )
    }

    
}

export default EducationSection