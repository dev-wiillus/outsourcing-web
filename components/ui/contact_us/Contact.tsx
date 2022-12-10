import Form from "./Form";

export default function Contact() {
	return (
		<div
			id="contact-application"
			className="mt-[120px] mb-[105px] flex flex-col items-center gap-y-[106px]"
		>
			<div className="flex flex-col items-center gap-y-[36px]">
				<div className="text-center text-[60px] font-bold leading-[72.61px]">
					<h1>Let&apos;s make</h1>
					<h1 className="text-primary">Great stories</h1>
				</div>
				<div className="text-[30px] leading-[36.31px]">
					<p>일을 사랑하는 팀 슬래시와</p>
					<p>고민은 나누고, 성장인 함께</p>
				</div>
			</div>
			<Form />
		</div>
	);
}
