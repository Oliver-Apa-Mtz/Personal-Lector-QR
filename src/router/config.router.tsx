import { Routes, Route } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";

import Home from "../pages/Home";
import Profile from "../pages/Profile";

export const Router = () => {
	return (
		<NextUIProvider>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/profile/:id" element={<Profile />} />
			</Routes>
		</NextUIProvider>
	);
}
