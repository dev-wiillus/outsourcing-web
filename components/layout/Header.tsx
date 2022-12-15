import Navigation from "./Navigation";
import Link from "next/link";
import Image from "next/image";

function Header() {
	return (
		<header className="fixed z-10 flex h-[56px] w-full items-center justify-between bg-white bg-opacity-90 px-4 md:container md:px-10">
			<Link href="/" className="flex items-baseline gap-x-3 text-2xl font-bold">
				<Image
					src="/images/logo/wiillus_logo.svg"
					alt="Logo"
					width={101}
					height={30}
				/>{" "}
				<div className="text-text-secondary">|</div>
				<div>Coworking</div>
			</Link>
			<Navigation />
		</header>
	);
}

export default Header;
