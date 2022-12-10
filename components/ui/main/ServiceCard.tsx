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
			className="card card-side min-h-[800px] flex-1 items-center rounded-none"
			style={{ backgroundColor }}
		>
			<figure>
				<Image {...imageProps} alt="service-image" className="mx-auto" />
			</figure>
			<div className="card-body text-white">
				<h2 className="reveal fade-bottom card-title text-6xl">
					{contentProps.title}
				</h2>

				<ul className="mt-20 text-4xl">
					{contentProps.content.map((content, index) => (
						<div key={index}>
							<li className="reveal fade-bottom-text list-outside list-disc">
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
