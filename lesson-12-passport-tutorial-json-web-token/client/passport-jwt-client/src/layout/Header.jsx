import { Link } from "react-router-dom";


const Header = () => {
    const signout = () => {
        localStorage.removeItem('user');
    }
    return (
        <div>
            <Link to="/">Home </Link>
            <Link to="/login">Login </Link>
            <Link to="/register">Register </Link>
            <Link to="/profile">Profile </Link>
            <Link onClick={signout} to="">signout</Link>
        </div>
    );
};

export default Header;