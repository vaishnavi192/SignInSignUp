import React from "react";

function Home() {
    const logout=()=>{
    localStorage.removeItem("signUp")
    window.location.reload()
}
    const deleteAccount=()=>{
    localStorage.clear()
    window.location.reload() //we can use useEffect or usestate if we don't want to reload page like this 
}
return(
    <div>
        <h1>Home Page</h1> 
        <h2>Welcome {localStorage.getItem("name")}</h2>
        <button onClick={logout} className="logout">Logout</button>
        <button onClick={deleteAccount} className="delete">Delete</button>
    </div>
    );
}
export default Home;
