import {useRef} from "react";
import {useState, useEffect} from "react";
import Home from "./Home";


function SignInsignUp() {
    const name=useRef()
    const email=useRef()
    const password=useRef()
    const [showHome, setShowHome]=useState(false)
    const [show, setShow]=useState(false)
    const localSignUp=localStorage.getItem("signUp")
    const localEmail=localStorage.getItem("email")
    const localPassword=localStorage.getItem("password")
    const localName=localStorage.getItem("name") 

    useEffect(()=>{ 
        if (localSignUp) {
            setShowHome(true)
    }
        if (localEmail) {
            setShow(true)
    }
    }, []) // Empty dependency array because we're not depending on any outside variables
    const handleClick = () => {
        if (name.current.value && email.current.value && password.current.value) {
            localStorage.setItem("name", name.current.value);
            localStorage.setItem("email", email.current.value);
            localStorage.setItem("password", password.current.value);
            localStorage.setItem("signUp", email.current.value); 
            alert("Account created successfully!!");
            setShowHome(true); 
        }
    };
    
    const handleSignIn = () => {
        if (email.current.value === localEmail && password.current.value === localPassword) {
            localStorage.setItem("signUp", email.current.value);
            alert("Signed in successfully!!");
            setShowHome(true); 
        } else {
            alert("Invalid email or password");
        }
    };
        
        return(
            <div>
            {showHome?<Home/>:
            (show?
                <div className="container">
                    <h1>Hello {localName}</h1>
                    <div className="input_space">
                        <input placeholder="Email" type='text' ref={email} />
    
                    </div>
                    <div className="input_space">
                        <input placeholder="Password" type="password" ref={password} />
                    </div>
                    <button onClick={handleSignIn}>Sign In</button>
                </div>
                :
                <div className="container">
                    <div className="input_space">
                        <input placeholder="Name" type='text' ref={name} />
                    </div>
                    <div className="input_space">
                        <input placeholder="Email" type='text' ref={email} />
                    </div>
                    <div className="input_space">
                        <input placeholder="Password" type='password' ref={password} />
                    </div>
                    <button onClick={handleClick}>Sign Up</button>
                    </div>)
                }
            </div>
);
}


export default SignInsignUp; 

//we can use usestate for all name email password fields and then set them like e.target.value instead of useref
// that is a better way 
