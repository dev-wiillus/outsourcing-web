import Image from "next/image";

export default function Target() {
	return (
		<div className="relative flex h-screen flex-col">
			<Image
				alt="target-bg"
				src="/images/main/target_bg.png"
				fill
				className="z-[-2]"
			/>
			<div className="absolute inset-0 z-[-1] h-full w-full bg-black opacity-20" />
			<div className="flex flex-auto flex-col items-center justify-center gap-y-[43px] text-center">
				<div className="text-[60px] font-bold leading-[72.61px]">
					<h1>Major company to</h1>
					<h1 className="text-primary">Startups</h1>
				</div>
				<div className="text-[30px] leading-[36.31px]">
					<p>국내외 유수 기업부터 스타트업까지,</p>
					<p>다양한 백그라운드의 마케팅, 브랜딩, 제품기획가가 함께 합니다</p>
				</div>
			</div>
		</div>
	);
}
