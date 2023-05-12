import './App.css';
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
       <Employee name="Marc" role="intern" />
       <Employee name="Elena" role={role}/>
       <Employee  name ="Caleb"/>
      </>
      
    ): (
       <p>You cannot see the employees</p>

    )}

    </div>
  );
}

export default App;
