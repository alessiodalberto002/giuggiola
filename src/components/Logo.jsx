import { Link } from 'react-router-dom';

const Logo = ({ image }) => {
    return (
        <Link to="/">
            <img src={image} alt="Logo Giuggiola" style={{ width: "15rem" }} />
        </Link>
    );
}

export default Logo;