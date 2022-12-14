import useRevealAnimation from "../../utils/useRevealAnimation";

type ContentProps = {
	title: string;
	content: string[];
};

type InputProps = {
	contentProps: ContentProps;
};

export default function ServiceCard({ contentProps }: InputProps) {
	useRevealAnimation();
	return (
		<div>
			<h3 className="mr-2 inline-block text-[44px] font-bold leading-[50px]">
				{contentProps.title}
			</h3>

			<p className="break-keep text-[18px] font-semibold leading-[26px] text-text-secondary">
				{contentProps.content.map((content, index) => (
					<span key={index}>
						{content}
						{index + 1 !== contentProps.content.length && (
							<span className="mx-1 text-text-primary">&</span>
						)}
					</span>
				))}
			</p>
		</div>
	);
}
