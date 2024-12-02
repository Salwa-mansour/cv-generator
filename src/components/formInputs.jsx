function FormInputs({title,fields}){
    return(
        <>
            <h3>{title}</h3>
            <fieldset>
                {fields.map((field)=>{
                    return <input type={field.type}  />
                })}
            </fieldset>
            <button type="submit">submit</button>
        </>
    )
}