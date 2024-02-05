import { useEffect, useState } from "react";

const Clock = () => {
	const [time, setTime] = useState(new Date().toLocaleTimeString());
	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date().toLocaleTimeString());
		}, 1000);
		return () => clearInterval(interval);
	}, []);
	return <p className={`text-xs select-none`}>{time}</p>;
}

const Logo = () => (
	<h1 onClick={() => window.location.reload()} className={`select-none text-sm sm:text-base`}>MG-OS</h1>
)

const Header = () => {
	return (
		<header className={`flex flex-row justify-between items-center text-background bg-dock
			py-2 px-5 sm:px-10 font-press-start border-solid border-b-[.01rem] border-text shadow-bottomShadow`}>
			<Logo />
			<Clock />
		</header>
	);
}

export default Header;