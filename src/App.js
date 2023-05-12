import './index.css';
import Employee  from './components/employee'; // import to used employee components 
import { useState } from 'react'; 


function App() {
  const [role, setRole] = useState('dev');

  const showEmployees = true; 
  return (
    <div className="App">
     
       
      { showEmployees ? (
      <> 
      <input type='text' onChange={(e) => { 
        console.log(e.target.value);
        setRole(e.target.value)
        }} />
        <div className='flex flex-wrap justifly-center'>

          <Employee
           name="Marc" 
            role="intern"
            img="https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg"
           />

          <Employee 
          name="Elena" 
          role={role}
          img="https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg"
           />

          <Employee 
           name ="Caleb"
           role={role}
           img="https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg"
           />

          <Employee 
            name="Marc"
            role="intern"
            img="https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg"
             />

          <Employee
           name="Elena" 
            role={role} 
            img="https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg"
          />

          <Employee 
           name ="Caleb"
           role={role}  
            img="https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg"
          />
          
          <Employee 
           name ="Caleb"
           role={role} 
           img="https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg"
           />
        </div>
     
      </>
      
    ): (
       <p>You cannot see the employees</p>

    )}

    </div>
  );
}

export default App;
