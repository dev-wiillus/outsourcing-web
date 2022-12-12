import Image from "next/image";

type InputProps = {
	image: string;
	title: string;
	description: string;
};

export default function PortfolioItem({
	image,
	title,
	description,
}: InputProps) {
	return (
		<div
			role="listitem"
			id="portfolio-item"
			className="panel relative cursor-pointer"
		>
			<Image
				alt={`target-bg-${title}`}
				src={image}
				width={181}
				height={48}
				className="absolute top-1/3 z-[-2] -translate-y-1/2"
			/>
			<div
				id="mask"
				className="animate__animated animate__zoomIn absolute inset-0 z-[-1] hidden h-full w-full bg-black opacity-50"
			></div>
			<span
				id="mask-text"
				className="top-1/2 -translate-y-1/2 text-5xl font-bold text-white opacity-0"
			>
				{description}
			</span>
		</div>
	);
}
