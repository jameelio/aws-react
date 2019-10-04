import React, {useState,useEffect} from 'react';
import axios from 'axios';

import './App.css';
import PrinterTable from './components/PrinterTable';


const App = () => {
  
  const [ printers,setPrinters ] = useState([])

  useEffect(()=>{
    async function getPrinters(){
      const result = await axios('https://lfpwim5vxl.execute-api.us-east-1.amazonaws.com/dev/printers');
      setPrinters(result.data)
    }
    getPrinters();
    
  },[])



  return (
    <div className="App">
      <h1>Printers Update</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h3>Create New Printer</h3>
        </div>
        <div className="d-flex justify-content-center">
          <h3>Available Printers</h3>
          <PrinterTable printers={printers} />
        </div>
      </div>
    </div>
  );
}

  


export default App;
