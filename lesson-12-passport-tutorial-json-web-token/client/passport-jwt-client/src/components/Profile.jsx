import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();
    const myToken = localStorage.getItem('user')

    useEffect(() => {
        axios.get('http://localhost:5000/profile', {
            headers: {
                Authorization: myToken
            }
        })
        .then((res) => {
           console.log(res.data.message)
        }).catch(err => {
            console.log(err)
            navigate('/login')
        })
    })
    return (
        <div>
            this is profile
        </div>
    );
};

export default Profile;