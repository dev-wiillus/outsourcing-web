import Image from "next/image";

const partners = [
	{
		image: "Samsung.png",
	},
	{
		image: "lge.png",
	},
	{
		image: "mcdonalds.jpeg",
	},
	{
		image: "bc-card.gif",
	},
	{
		image: "bentley.png",
	},
	{
		image: "memebox.jpeg",
	},
	{
		image: "vego.png",
	},
	{
		image: "sepingmall.png",
	},
	{
		image: "openfarm.png",
	},
	{
		image: "the-sauce-lab.png",
	},
];

export default function Partners() {
	return (
		<div
			id="partners"
			className="mt-[119px] flex h-screen flex-col items-center gap-y-[119px]"
		>
			<div className="text-[60px] font-bold leading-[72.61px]">
				<h1>Our Partners</h1>
			</div>
			<div className="grid grid-cols-4 grid-rows-3 items-center gap-x-[66px] gap-y-[90px]">
				{partners.map(({ image }, index) => (
					<Image
						alt={`logo-${image.split(".")[0]}`}
						src={`/images/logo/${image}`}
						width={181}
						height={48}
						key={index}
					/>
				))}
			</div>
		</div>
	);
}
