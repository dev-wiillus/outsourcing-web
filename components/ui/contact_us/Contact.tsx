import Form from "./Form";

export default function Contact() {
	return (
		<div
			id="contact-application"
			className="flex flex-col items-center gap-y-[106px] pt-[120px] pb-[105px]"
		>
			<div className="flex flex-col items-center gap-y-[32px] lg:gap-y-[48px]">
				<div className="text-center text-[28px] font-bold leading-[33.89px] lg:text-[60px] lg:leading-[72.61px]">
					<h1>Let&apos;s make</h1>
					<h1 className="text-primary">Great stories</h1>
				</div>
				<div className="text-[14px] leading-[18px] lg:text-[30px] lg:leading-[44px]">
					<p>일을 사랑하는 팀 윌러스와</p>
					<p>고민은 나누고, 성장은 함께</p>
				</div>
			</div>
			<Form />
		</div>
	);
}
