import Image from "next/image";
import { useEffect } from "react";
import useGsap from "../../utils/useGsap";

export default function How() {
	const gsap = useGsap();
	useEffect(() => {
		const container = document.querySelector(".how-container");
		if (container) {
			const tl = gsap.timeline({
				scrollTrigger: {
					pin: true,
					scrub: 1,
					trigger: container,
					start: "top center",
					end: () =>
						container.scrollHeight - document.documentElement.clientHeight,
				},
				defaults: { ease: "none", duration: 1 },
			});

			tl.to(
				".how-bg",
				{
					transform: "scale(1.2)",
				},
				0,
			).from(
				".how-message",
				{ y: 100, opacity: 0, stagger: 0.4, duration: 0.8, delay: 2 },
				0,
			);
		}
	});
	return (
		<div className="how-container relative flex h-[720px] flex-col overflow-hidden">
			<Image
				alt="target-bg"
				src="/images/main/how_bg.png"
				fill
				className="how-bg z-[-2]"
			/>
			<div className="absolute inset-0 z-[-1] h-full w-full bg-black opacity-20" />
			<div className="flex flex-auto -translate-y-[32px] flex-col items-center justify-center gap-y-[12px] text-center">
				<div className="how-message text-[60px] font-bold leading-[72.61px]">
					<h1>Think hard</h1>
					<h1 className="text-primary">Do bold</h1>
				</div>
				<div className="how-message text-[30px] leading-[36.31px]">
					<p>비즈니스의 Pain point를 정확히 판단하고,</p>
					<p>성장에 필요한 전략과 실행안을 제안합니다</p>
				</div>
			</div>
		</div>
	);
}
