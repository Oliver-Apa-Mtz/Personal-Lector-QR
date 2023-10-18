
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip } from "@nextui-org/react";

import Layout from '../../components/Layout';
import { EditIcon } from "../../components/EditIcon";
import { DeleteIcon } from "../../components/DeleteIcon";
import { EyeIcon } from "../../components/EyeIcon";

import { columns, users } from "../../utils/data";

import './home.css';

const Home = () => {
	const navigate = useNavigate();
	const renderCell = React.useCallback((user: any, columnKey: any) => {
		const cellValue = user[columnKey];

		switch (columnKey) {
			case "name":
				return (
					<User
						avatarProps={{ radius: "lg", src: user.avatar }}
						description={user.email}
						name={cellValue}
					>
						{user.email}
					</User>
				);
			case "role":
				return (
					<div className="flex flex-col">
						<p className="text-bold text-sm capitalize">{cellValue}</p>
						<p className="text-bold text-sm capitalize text-default-400">{user.team}</p>
					</div>
				);
			case "status":
				return (
					<Chip className="capitalize" color={user.status} size="sm" variant="flat">
						{cellValue === 'success' ? 'Completo' : cellValue === 'warning' ? 'Pendiente' : 'Cancelado'}
					</Chip>
				);
			case "actions":
				return (
					<div className="relative flex items-center gap-6">
						<Tooltip content="Ver datos">
							<span className="text-lg text-default-400 cursor-pointer active:opacity-50">
								<EyeIcon onClick={() => { navigate('/profile/' + user.id) }} />
							</span>
						</Tooltip>
						<Tooltip content="Editar usuario">
							<span className="text-lg text-default-400 cursor-pointer active:opacity-50">
								<EditIcon />
							</span>
						</Tooltip>
						<Tooltip color="danger" content="Eliminar usuario">
							<span className="text-lg text-danger cursor-pointer active:opacity-50">
								<DeleteIcon />
							</span>
						</Tooltip>
					</div>
				);
			default:
				return cellValue;
		}
	}, []);

	return (
		<Layout>
			{
				<div className="container">
					<Table aria-label="Example table with custom cells">
						<TableHeader columns={columns}>
							{(column: any) => (
								<TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
									{column.name}
								</TableColumn>
							)}
						</TableHeader>
						<TableBody items={users}>
							{(item: any) => (
								<TableRow key={item.id}>
									{(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
								</TableRow>
							)}
						</TableBody>
					</Table>
				</div>
			}
		</Layout>
	)
}

export default Home