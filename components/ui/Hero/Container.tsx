import ResponsiveImage from "../ResponsiveImage";

type InputProps = {
	children: React.ReactNode;
	bgSrcMobile: string;
	bgSrcWeb: string;
	title: string;
	className?: string;
};

export default function Container({
	children,
	bgSrcMobile,
	bgSrcWeb,
	title,
	className,
}: InputProps) {
	return (
		<div
			className={`relative flex h-[720px] flex-auto flex-col justify-center ${
				className || ""
			}`}
		>
			<ResponsiveImage
				mobile={{
					src: bgSrcMobile,
					alt: title,
					fill: true,
					className: "z-[-2]",
				}}
				web={{
					src: bgSrcWeb,
					alt: title,
					fill: true,
					className: "z-[-2]",
				}}
			/>
			{children}
		</div>
	);
}
