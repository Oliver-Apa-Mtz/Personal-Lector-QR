import { useNavigate } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import Logo from "../../assets/img/logo.png";
import './header.css';

const Header = () => {
	const navigate = useNavigate();

	return (
		<Navbar className="header">
			<NavbarBrand onClick={() => { navigate('/') }}>
				<img className="header__logo" src={Logo} alt="" />
				<p className="font-bold text-inherit">PROYECTO</p>
			</NavbarBrand>
			<NavbarContent className="hidden sm:flex gap-4" justify="center"></NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem>
					<Button as={Link} color="primary" href="#" variant="flat">
						Registrar
					</Button>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	)
}

export default Header