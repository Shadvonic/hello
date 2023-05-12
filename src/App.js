import './index.css';
import Employee  from './components/employee'; // import to used employee components 
import { useState } from 'react'; 
import {v4 as uuidv4 } from 'uuid';


function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState(
    [
      {name: "Marc", role: "iOS Developer", img:"https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg"},
      {name: "Yodhe", role: "Web Developer", img:"https://images.pexels.com/photos/2743754/pexels-photo-2743754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
      {name: "Anjel", role: "Manager", img:"https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
      {name: "Carlos", role: "Consultant", img:"https://images.pexels.com/photos/2586823/pexels-photo-2586823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
      {name: "Nick", role: "Designer", img:"https://images.pexels.com/photos/5160850/pexels-photo-5160850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
      {name: "Max", role: "intern", img:"https://images.pexels.com/photos/5514883/pexels-photo-5514883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    
    ]
  );

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

          {employees.map((employee) => {

           
            return (<Employee 
              key = {uuidv4()}
              name = {employee.name} 
              role = {employee.role}
              img = {employee.img}
            />
            );
          })}
        </div>
     
      </>
      
    ): (
       <p>You cannot see the employees</p>

    )}

    </div>
  );
}

export default App;
