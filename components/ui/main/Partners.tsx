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
		<div
			id="partners"
			className="mb-[63.5px] mt-[64px] flex flex-col items-center justify-between gap-y-[24px] lg:mb-[80px] lg:mt-[120px]"
		>
			<div className="">
				<h1 className="text-[28px] font-bold leading-[33.89px] lg:text-[56px] lg:leading-[67.77px]">
					Our Partners
				</h1>
			</div>
			<div className="slider">
				<div className="slide-track gap-x-12 lg:gap-x-20">
					{multipliedPartners.map(({ image }, index) => (
						<div className="slide" key={index}>
							<div className="hidden lg:block">
								<Image
									alt={`logo-${image.split(".")[0]}`}
									src={`/images/logo/${image}`}
									width={300}
									height={300}
								/>
							</div>
							<div className="block lg:hidden">
								<Image
									alt={`logo-${image.split(".")[0]}`}
									src={`/images/logo/${image}`}
									width={160}
									height={160}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
