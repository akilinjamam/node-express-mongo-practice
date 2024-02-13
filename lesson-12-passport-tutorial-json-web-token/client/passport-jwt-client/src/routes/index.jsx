import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home.jsx";
import Register from "../components/Register.jsx";
import Profile from "../components/Profile.jsx";
import Login from "../components/Login.jsx";
import Error from "../components/Error.jsx";
import Header from "../layout/Header.jsx";
const Index = () => {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/profile" element={<Profile />}/>
                <Route path="*" element={<Error />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Index;