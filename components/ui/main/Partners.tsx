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
		<div id="partners" className="my-8 flex flex-col items-center gap-y-12">
			{/* <div className="text-[60px] font-bold leading-[72.61px]">
				<h1>Our Partners</h1>
			</div> */}
			<div className="slider">
				<div className="slide-track gap-x-32">
					{partners.map(({ image }, index) => (
						<div className="slide" key={index}>
							<Image
								alt={`logo-${image.split(".")[0]}`}
								src={`/images/logo/${image}`}
								width={181}
								height={48}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
