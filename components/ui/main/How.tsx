import Image from "next/image";

export default function How() {
	return (
		<div className="relative flex h-screen flex-col">
			<Image
				alt="target-bg"
				src="/images/main/how_bg.png"
				fill
				className="z-[-2]"
			/>
			<div className="absolute inset-0 z-[-1] h-full w-full bg-black opacity-20" />
			<div className="flex flex-auto -translate-y-[32px] flex-col items-center justify-center gap-y-[12px] text-center">
				<div className="text-[60px] font-bold leading-[72.61px]">
					<h1>Think hard</h1>
					<h1 className="text-primary">Do bold</h1>
				</div>
				<div className="text-[30px] leading-[36.31px]">
					<p>비즈니스의 Pain point를 정확히 판단하고,</p>
					<p>성장에 필요한 전략과 실행안을 제안합니다</p>
				</div>
			</div>
		</div>
	);
}
