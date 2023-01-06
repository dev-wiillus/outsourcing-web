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
			<h3 className="mr-2 mb-[40px] inline-block text-[28px] font-bold leading-[50px] lg:text-[44px] lg:leading-[33.89px]">
				{contentProps.title}
			</h3>

			<div className="break-keep text-[18px] font-semibold leading-[26px] text-text-secondary">
				{contentProps.content.map((content, index) => (
					<div key={index} className="mb-[32px] lg:mb-0">
						{content}
						{index + 1 !== contentProps.content.length && (
							<br className="block lg:hidden" />
						)}
					</div>
				))}
			</div>
		</div>
	);
}
