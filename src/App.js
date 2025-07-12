import Navbar from'./components/navbar';
import Facts from'./components/facts';
import React from 'react';
function App() {
  return(
    <div>
      <h1>random facts</h1>
      <Facts />
      <Navbar />
    </div>
  );
}
export default App;