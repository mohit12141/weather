import React from "react";
const api = {
  key : "efdd4016b1bffe2a2a1a314bcc822c89",
  base : "https://api.openweathermap.org/data/2.5/"
}
function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search City"
            />
              
        </div>
      </main>
    </div>
  );
}

export default App;
