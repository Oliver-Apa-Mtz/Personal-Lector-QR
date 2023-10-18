import Header from '../Header';

interface Props {
	children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
	return (
		<div>
			<Header />
			<main className="body-contain">
				{children}
			</main>
		</div>
	)
}

export default Layout