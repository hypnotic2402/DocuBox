// import Navbar from "./components/Navbar";
import React from "react";
import Frontpage from "./homepage/Frontpage";
import AddDocument from "./ipfs/AddDocument";
import Docspage from "./topnav/Docspage"

function App() {
    return (
        // <AddDocument />
        <div className="App container mt-5">
                <AddDocument />
        </div>
    );
}

export default App;