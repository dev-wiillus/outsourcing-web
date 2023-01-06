import Navigation from "./Navigation";
import Link from "next/link";
import Image from "next/image";

function Header() {
	return (
		<header className="fixed z-10 flex h-[56px] w-full items-center justify-between bg-transparent bg-opacity-90 px-4 md:container md:px-10 lg:bg-white">
			<div className="hidden lg:block">
				<Link
					href="/"
					className="flex items-baseline gap-x-3 text-2xl font-bold"
				>
					<Image
						src="/images/logo/wiillus_logo.svg"
						alt="Logo"
						width={101}
						height={30}
					/>{" "}
					<div className="text-text-secondary">|</div>
					<div>Coworking</div>
				</Link>
			</div>
			<div className="block lg:hidden">
				<Link
					href="/"
					className="flex items-baseline gap-x-3 text-sm font-bold"
				>
					<Image
						src="/images/logo/wiillus_logo.svg"
						alt="Logo"
						width={50.5}
						height={15}
					/>{" "}
					<div className="text-text-secondary">|</div>
					<div>Coworking</div>
				</Link>
			</div>{" "}
			<div className="hidden lg:block">
				<Navigation />
			</div>
		</header>
	);
}

export default Header;
