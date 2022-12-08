import Link from "next/link";

const menu = [
	{ name: "OUR PARTNERS", path: "/partners" },
	{ name: "OUR SERVICES", path: "/services" },
	{ name: "CONTACT US", path: "/contact-us" },
];

function Navigation() {
	return (
		<nav>
			<ul className="flex">
				{menu.map(({ name, path }) => (
					<li
						key={path}
						className="p-4 text-sm font-semibold text-primary md:p-6"
					>
						<Link href={path}>{name}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default Navigation;
