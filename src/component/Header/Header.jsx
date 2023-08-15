import logo from '../../assets/investment-calculator-logo.png';
import StyledHeader from "./style";

const Header = () => {
    return (
        <StyledHeader>
            <img src={logo} alt="logo" />
            <h1>Investment Calculator</h1>
        </StyledHeader>
    )
}

export default Header;