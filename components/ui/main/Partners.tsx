import Image from "next/image";

const partners = [
	{
		image: "samsung.png",
	},
	{
		image: "lge.png",
	},
	{
		image: "mcdonalds.png",
	},
	{
		image: "bc.png",
	},
	{
		image: "bentley.png",
	},
	{
		image: "memebox.png",
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

const multipliedPartners = [
	...partners,
	...partners,
	...partners,
	...partners,
	...partners,
	...partners,
	...partners,
	...partners,
	...partners,
	...partners,
];
export default function Partners() {
	return (
		<div id="partners" className="flex flex-col items-center gap-y-12">
			<div className="slider">
				<div className="slide-track gap-x-12 lg:gap-x-20">
					{multipliedPartners.map(({ image }, index) => (
						<div className="slide" key={index}>
							<div className="hidden lg:block">
								<Image
									alt={`logo-${image.split(".")[0]}`}
									src={`/images/logo/${image}`}
									width={181}
									height={181}
								/>
							</div>
							<div className="block lg:hidden">
								<Image
									alt={`logo-${image.split(".")[0]}`}
									src={`/images/logo/${image}`}
									width={140}
									height={140}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
