// creating a component as a function so it can be reused
function Employee(props) {
    return (
        <> 
         <h3>Employee {props.name} </h3>
         <p>{props.role ? props.role : "No role"}</p> 
         {props.role ? ( 
         
         <p class="role">{props.role}</p>
         ) : ( 

         <p class="no role">No role</p> 
         )}  {/* use only if you want to display something different */ }
        </>
       
    )
}

export default Employee;;