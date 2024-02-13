import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

   
    const myToken = localStorage.getItem('user')
    useEffect(() => {
        axios.get('http://localhost:5000/profile', {
            headers: {
                Authorization: myToken
            }
        })
        .then(() => {
           navigate('/profile')
        }).catch(err => {
            console.log(err)
            console.log(err.message)
        })
    })


   async function handleSubmit(){
     await axios.post('http://localhost:5000/login', {
            username,
            password
        }).then(res => {
            console.log(res.data.message)
            localStorage.setItem("user", res.data.token)
            navigate('/profile')
        }).catch(err => {
            console.log(err);
            navigate('/login')
        })
    } 
    return (
        <div>
        <h2>Login</h2>
        <input type="text" placeholder="username" name="" id=""
        onChange={(e) => setUsername(e.target.value)}
        required
        />
        <br />
        <input type="text" placeholder="password" name="" id=""
        onChange={(e) => setPassword(e.target.value)}
        required
        />
        <br />
        <input onClick={handleSubmit} type="submit" value="submit" name="" id=""
        />
        <br />
    </div>
    );
};

export default Login;