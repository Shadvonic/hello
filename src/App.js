import './App.css';
import Employee  from './components/employee'; // import to used employee components 


function App() {

  const showEmployees = true; 
  return (
    <div className="App">
     
       
      { showEmployees ? 
  

      <> 
       <Employee name="Marc" role="intern" />
       <Employee name="Elena"/>
       <Employee  name ="Caleb"/>
      </>
      
       : 
       <p>You cannot see the employees</p>

    }
    </div>
  );
}

export default App;
