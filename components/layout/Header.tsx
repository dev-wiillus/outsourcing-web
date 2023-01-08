import Navigation from "./Navigation";
import Link from "next/link";
import Image from "next/image";

function Header() {
	return (
		<header className="navbar fixed z-10 h-[100px] justify-between bg-transparent bg-opacity-90 px-4 lg:container lg:bg-white">
			<div className="navbar-start">
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
						className="flex items-baseline gap-x-3 text-base font-bold"
					>
						<Image
							src="/images/logo/wiillus_logo.svg"
							alt="Logo"
							width={60.5}
							height={15}
						/>{" "}
						<div className="text-text-secondary">|</div>
						<div>Coworking</div>
					</Link>
				</div>
			</div>
			<div className="navbar-end">
				<div className="hidden lg:block">
					<Navigation />
				</div>
				<div className="dropdown-end dropdown lg:hidden">
					<label tabIndex={0} className="btn-ghost btn-circle btn">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h7"
							/>
						</svg>
					</label>
					<Navigation />
				</div>
			</div>
		</header>
	);
}

export default Header;
