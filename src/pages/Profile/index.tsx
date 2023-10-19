import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import QRCode from "qrcode.react";
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";

import Layout from '../../components/Layout';

import './profile.css';
import { users } from "../../utils/data";

const Profile = () => {
	const { id } = useParams();
	const [userData, setUserData] = useState({
		id: 0,
		name: "",
		role: "",
		team: "",
		status: "",
		age: "",
		avatar: "",
		email: "",
		folio: "",
		curp: "",
		fecha: "",
		vigencia: "",
		curso: "",
		empresa: "",
	});
	const [profileUrl, setProfileUrl] = useState("");

	useEffect(() => {
		const parsedId = parseInt(id || '0');
		getUserById(parsedId);
	}, [id])

	const getUserById = (id: number) => {
		let user = users.find((user: any) => user.id === id);
		setUserData(user);
		setProfileUrl(`https://personal-lector-qr.vercel.app/profile/${id}`)
	};

	return (
		<Layout>
			{
				<div className="container">
					<div>
						<Card className="cardItem">
							<CardHeader className="justify-between p-5">
								<div className="flex gap-5">
									<Avatar isBordered radius="full" size="lg" src={userData.avatar} />
									<div className="flex flex-col gap-1 items-start justify-center">
										<h4 className="text-large font-semibold leading-none text-default-700">{userData.name}</h4>
										<h5 className="text-medium tracking-tight text-default-400">{userData.role}</h5>
									</div>
								</div>
								<Button color="primary" radius="full" size="md" variant="solid">
									Editar
								</Button>
							</CardHeader>
							<CardBody className="p-5 text-medium text-default-400">
								<p>
									Frontend developer and UI/UX enthusiast. Join me on this coding adventure!
								</p>
								<div className="cardItem__body flex gap-2 mt-4">
									<p className="cardItem__info font-bold text-default-700 text-large">Folio:</p>
									<p className="cardItem__text text-default-400 text-large">{userData.folio}</p>
								</div>
								<div className="cardItem__body flex gap-2 mt-2">
									<p className="cardItem__info font-bold text-default-700 text-large">CURP:</p>
									<p className="cardItem__text text-default-400 text-large">{userData.curp}</p>
								</div>
								<div className="cardItem__body flex gap-2 mt-2">
									<p className="cardItem__info font-bold text-default-700 text-large">Fecha de impartición:</p>
									<p className="cardItem__text text-default-400 text-large">{userData.fecha}</p>
								</div>
								<div className="cardItem__body flex gap-2 mt-2">
									<p className="cardItem__info font-bold text-default-700 text-large">Vigencia:</p>
									<p className="cardItem__text text-default-400 text-large">{userData.vigencia}</p>
								</div>
								<div className="cardItem__body flex gap-2 mt-2">
									<p className="cardItem__info font-bold text-default-700 text-large">Curso:</p>
									<p className="cardItem__text text-default-400 text-large">{userData.curso}</p>
								</div>
								<div className="cardItem__body flex gap-2 mt-2">
									<p className="cardItem__info font-bold text-default-700 text-large">Empresa:</p>
									<p className="cardItem__text text-default-400 text-large">{userData.empresa}</p>
								</div>
								<div className="cardItem__body mt-5 p-5">
									<QRCode value={profileUrl} className="qrcode" />
								</div>
							</CardBody>
							<CardFooter className="gap-3 p-5">
								<div className="cardItem__body flex gap-2">
									<p className="cardItem__info font-semibold text-default-700 text-medium">Email:</p>
									<p className="cardItem__text text-default-400 text-medium">{userData.email}</p>
								</div>
							</CardFooter>
						</Card>
					</div>
				</div>
			}
		</Layout>
	)
}

export default Profile