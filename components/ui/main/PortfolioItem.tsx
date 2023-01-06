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
			className="relative h-[400px] max-w-[400px] cursor-pointer overflow-hidden"
		>
			<Image
				alt={`portfolio-item-bg-${title}`}
				src={image}
				fill
				className="z-[-2]"
				sizes="(max-width: 640px) 100vw,
              			(max-width: 1280px) 50vw,
              			33vw"
			/>
			<div
				id="mask"
				className="animate__animated animate__zoomIn absolute inset-0 z-[-1] hidden h-full w-full bg-black opacity-50"
			></div>
			<div
				id="mask-text"
				className="top-1/2 flex -translate-y-1/2 flex-col gap-y-3 px-2 font-bold text-white opacity-0"
			>
				<h3 id="title" className="text-lg">
					{title}
				</h3>
				<span id="desc" className="text-5xl">
					{description}
				</span>
			</div>
		</div>
	);
}

// 스크롤에 따라 움직이는 포트폴리오
// export default function PortfolioItem({
// 	image,
// 	title,
// 	description,
// }: InputProps) {
// 	return (
// 		<div
// 			role="listitem"
// 			id="portfolio-item"
// 			className="panel relative cursor-pointer"
// 		>
// 			<Image alt={`target-bg-${title}`} src={image} fill className="z-[-2]" />
// 			<div
// 				id="mask"
// 				className="animate__animated animate__zoomIn absolute inset-0 z-[-1] hidden h-full w-full bg-black opacity-50"
// 			></div>
// 			<span
// 				id="mask-text"
// 				className="top-1/2 -translate-y-1/2 text-5xl font-bold text-white opacity-0"
// 			>
// 				{description}
// 			</span>
// 		</div>
// 	);
// }
