import React,{useState} from "react";
import './index.css';
import logo from './assets/logo.jpeg';
import google from './assets/google.png';

function App() {

        const togglePasswordVisibility = () => {
            const pwShowHide = document.querySelectorAll(".eye-icon");
            pwShowHide.forEach(eyeIcon => {
                eyeIcon.addEventListener("click", () => {
                    eyeIcon.classList.toggle("bx-hide");
                    eyeIcon.classList.toggle("bx-show");
                });
            });
            const pwFields = document.querySelectorAll(".password");
            pwFields.forEach(password => {
                if (password.type === "password") {
                    password.type = "text";
                } else {
                    password.type = "password";
                }
            });
        };

        const toggleSignupForm = () => {
            const forms = document.querySelector(".forms");
            forms.classList.toggle("show-signup");
        };

        const links = document.querySelectorAll(".link");
        links.forEach(link => {
            link.addEventListener("click", e => {
                e.preventDefault();
                toggleSignupForm();
            });
        });

        const [phoneNumber, setPhoneNumber] = useState('');
        const [valid, setValid] = useState(true);
        const handleChange = (event) => {
        const input = event.target.value;
            setPhoneNumber(input);
            setValid(validatePhoneNumber(input));
        };
        const validatePhoneNumber = (phoneNumber) => {
            const phoneNumberPattern = /^\d{10}$/;
            return phoneNumberPattern.test(phoneNumber);
        };

  return (
    <section className="container forms">
    <div className="form login">
        <div className="form-content">
            <div className="top">
                <img className="logo" src={logo} alt="Logo" />
            </div>
            <div className="bottom">
                <p className="wel">Welcome to Itho</p>
            </div><br />
            <header>Login</header>
            <form action="#">
                <div className="field input-field">
                    <input type="email" placeholder="Email" className="input" />
                </div>
                <div className="field input-field">
                    <input type="password" placeholder="Password" className="password" />
                    <i className='bx bx-hide eye-icon' onClick={togglePasswordVisibility}></i>
                </div>
                <div className="form-link">
                    <a href="#" className="forgot-pass">Forgot password?</a>
                </div>
                <div className="field button-field">
                    <button>Login</button>
                </div>
            </form>
            <div className="form-link">
                <span style={{ color: "white" }}>Don't have an account?<a href="#" className="link" onClick={toggleSignupForm}>Signup</a></span>
            </div>
        </div>
        <div className="line"></div>
        <div className="media-options">
            <a href="homepage.html" className="field google">
                <img src={google} alt="Google Logo" className="google-img" />
                <span>Login with Google</span>
            </a>
        </div>
    </div>
    <div className="form signup">
        <div className="form-content">
            <div className="top">
                <img className="logo" src={logo} alt="Logo" />
            </div>
            <div className="bottom">
                <p className="wel">Welcome to Itho</p>
            </div><br />
            <header>Signup</header>
            <form action="loginpage.html">
                <div className="field input-field">
                    <input type="email" placeholder="Email" className="input" />
                </div>
                <div className="field input-field">
                    <input type="password" placeholder="Create password" className="password" />
                </div>
                <div className="field input-field">
                    <input type="text" placeholder="Mobile Number" value={phoneNumber} onChange={handleChange} />
                    {!valid && <p className="valid-message">Please enter a valid 10-digit phone number.</p>}
                </div>
                <div className="field button-field">
                    <button>Signup</button>
                </div>
            </form>
            <div className="form-link">
                <span style={{ color: "white" }}>Already have an account? <a href="#" className="link login-link" onClick={toggleSignupForm}>Login</a></span>
            </div>
        </div>
        <div className="media-options">
            <a href="loginpage.html" className="field google">
                <img src={google} alt="Google Logo" className="google-img" />
                <span>Signup with Google</span>
            </a>
        </div>
    </div>
</section>

  );
}

export default App