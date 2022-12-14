import Image from "next/image";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Target() {
	useLayoutEffect(() => {
		const container = document.querySelector(".target-container");
		if (container) {
			const tl = gsap.timeline({
				scrollTrigger: {
					id: "target",
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
				".target-bg",
				{
					transform: "scale(1.2)",
				},
				0,
			).from(
				".target-message",
				{ y: 100, opacity: 0, stagger: 0.4, duration: 0.8, delay: 2 },
				0,
			);
			return () => {
				tl.pause().kill();
				ScrollTrigger.killAll();
			};
		}
	}, []);
	return (
		<div className="target-container relative flex h-[720px] flex-col overflow-hidden">
			<Image
				alt="target-bg"
				src="/images/main/target_bg.png"
				fill
				className="target-bg z-[-2]"
			/>
			<div className="absolute inset-0 z-[-1] h-full w-full bg-black opacity-20" />
			<div className="flex flex-auto flex-col items-center justify-center gap-y-[43px] text-center">
				<div className="target-message text-[60px] font-bold leading-[72.61px]">
					<h1>Major company to</h1>
					<h1 className="text-primary">Startups</h1>
				</div>
				<div className="target-message text-[30px] leading-[36.31px]">
					<p>국내외 유수 기업부터 스타트업까지,</p>
					<p>다양한 백그라운드의 마케팅, 브랜딩, 제품기획가가 함께 합니다</p>
				</div>
			</div>
		</div>
	);
}
