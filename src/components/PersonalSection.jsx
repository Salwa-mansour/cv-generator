import { useState } from "react"

function PersonalSection({printMode}){
    const [editMode,setEditMode] = useState(true)
    const [PersonalInfo,setPersonalInfo] = useState({
        name:'Salwa Mansour Al-Qadasi',
        title:'Frontend web Developer',
        phone:'+967 714182818',
        email:'salwamansour2021@gmail.com',
        location:'Sana\'a \\ Yemen',
        website:'https://salwacoding.com'
    });

    function setData(e){
        e.preventDefault();
        const form = e.target;
        const newPersonalData = {
            name:form.name.value,
            title:form.title.value,
            phone:form.phone.value,
            email:form.email.value,
            location:form.location.value,
            website:form.website.value
        }
        for (const key in newPersonalData){
                // if at least on field have data
                // display user data
            if(newPersonalData[key].trim() !==""){
                 setPersonalInfo(newPersonalData)
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
                    <label htmlFor="name">name</label>
                    <input type="text" name="name"  id="name" placeholder={PersonalInfo.name} />
                </div>
                <div>
                    <label htmlFor="title">title</label>
                    <input type="text" name="title"  id="title" placeholder={PersonalInfo.title} />
                </div>
                <div>
                    <label htmlFor="email">email</label>
                    <input type="email" name="email" id="email" placeholder={PersonalInfo.email} />
                </div>
                <div>
                    <label htmlFor="phone">phone</label>
                     <input type="tel" name="phone" id="phone" placeholder={PersonalInfo.phone} />
                </div>
               <div>
                <label htmlFor="location">location</label>
                <input type="text" name="location" id="location" placeholder={PersonalInfo.location} />
               </div>
                <div>
                    <label htmlFor="website">website</label>
                    <input type="text" name="website" id="website" placeholder={PersonalInfo.website} />
                </div>
                
                <button type="submit">submit</button>
            </form>
        </div>
    )}else{
     return(
        <div>
            <h3>{PersonalInfo.name}</h3>
            <p>{PersonalInfo.title}</p>
            <p>{PersonalInfo.phone}</p>
            <p>{PersonalInfo.email}</p>
            <p>{PersonalInfo.location}</p>
            <p>{PersonalInfo.website}</p>
            <button onClick={()=>setEditMode(true)}>edit</button>
        </div>
     )
    }

    
}

export default PersonalSection