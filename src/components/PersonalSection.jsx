import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { faAt } from "@fortawesome/free-solid-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import '../styles/header.css'
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
        <section className="header-data">
            <form onSubmit={setData} >
                <fieldset className="main-data">
                    <div>
                        <label htmlFor="name">name</label>
                        <input type="text" name="name"  id="name" placeholder={PersonalInfo.name} />
                    </div>
                    <div>
                        <label htmlFor="title">title</label>
                        <input type="text" name="title"  id="title" placeholder={PersonalInfo.title} />
                    </div>
                </fieldset>
                <fieldset className="details">
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
                </fieldset>
                
                <button type="submit">submit</button>
            </form>
        </section>
    )}else{
     return(
        <section className="header-data" >
            <section className="main-data">
                <h3>{PersonalInfo.name}</h3>
                <p>{PersonalInfo.title}</p>
            </section>
            <section className="details">
                <p><FontAwesomeIcon icon={faPhone} />
                    {PersonalInfo.phone}</p>
                <p><FontAwesomeIcon icon={faAt} />
                    {PersonalInfo.email}</p>
                <p><FontAwesomeIcon icon={faLocationDot} />
                    {PersonalInfo.location}</p>
                <p><FontAwesomeIcon icon={faGlobe} />
                    {PersonalInfo.website}</p>
            </section>
           
         
            <button onClick={()=>setEditMode(true)}>edit</button>
        </section>
     )
    }

    
}

export default PersonalSection