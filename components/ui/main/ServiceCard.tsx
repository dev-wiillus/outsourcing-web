import Image, { ImageProps } from "next/image";
import useRevealAnimation from "../../utils/useRevealAnimation";

type ContentProps = {
	title: string;
	content: string[];
};

type InputProps = {
	backgroundColor: string;
	imageProps: Omit<ImageProps, "alt">;
	contentProps: ContentProps;
};

export default function ServiceCard({
	backgroundColor,
	imageProps,
	contentProps,
}: InputProps) {
	useRevealAnimation();
	return (
		<div
			className="service-card card card-side min-h-[800px] flex-1 items-center rounded-[4rem]"
			style={{ backgroundColor }}
		>
			<figure>
				<Image {...imageProps} alt="service-image" className="mx-auto" />
			</figure>
			<div className="service-card-mask absolute inset-0 z-[-1] h-full w-full bg-black opacity-100" />
			<div className="card-body text-white">
				<h2
					className="card-title text-6xl"
					//  className="reveal fade-bottom card-title text-6xl"
				>
					{contentProps.title}
				</h2>

				<ul className="mt-20 text-4xl">
					{contentProps.content.map((content, index) => (
						<div key={index}>
							<li
							// className="reveal fade-bottom-text list-outside list-disc"
							>
								{content}
							</li>
							{index + 1 !== contentProps.content.length && <br />}
						</div>
					))}
				</ul>
			</div>
		</div>
	);
}
