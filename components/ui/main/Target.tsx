import Image from "next/image";
import { useLayoutEffect } from "react";
import useGsap from "../../utils/useGsap";

export default function Target() {
	const gsap = useGsap();
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

			tl.from(
				".target-bg",
				{
					x: () =>
						container.scrollHeight + document.documentElement.clientWidth,
				},
				0,
			)
				.to(
					".target-bg",
					{
						x: () => 0,
					},
					0,
				)
				.from(
					".target-message",
					{ y: 100, opacity: 0, stagger: 0.4, duration: 0.8, delay: 2 },
					0,
				);
			return () => {
				tl.revert();
			};
		}
	}, [gsap]);
	return (
		<div
			id="target"
			className="target-container relative flex h-[560px] flex-col overflow-hidden bg-[#FFD91B] lg:h-[720px]"
		>
			<div className="hidden lg:block">
				<Image
					alt="target-bg"
					src="/images/main/target_bg_web.png"
					width={948}
					height={560}
					className="target-bg absolute top-0 right-0 z-[-2]"
				/>
			</div>
			<div className="block lg:hidden">
				<Image
					alt="target-bg"
					src="/images/main/target_bg_mobile.png"
					width={360}
					height={280}
					className="target-bg absolute bottom-0 right-0 z-[-2]"
				/>
			</div>
			<div className="mx-auto mt-[64px] mb-0 ml-0 flex w-full flex-auto flex-col gap-y-[24px] px-[36px] text-center font-semibold lg:mt-0 lg:ml-[96px] lg:mb-[120px] lg:justify-end lg:gap-y-[20px] lg:text-left">
				<div className="target-message text-[16px] leading-[24px]">
					<span>Major company to </span>
					<span className="text-primary">Startups</span>
				</div>
				<div className="target-message text-[20px] leading-[36px] lg:text-[40px] lg:leading-[56px]">
					<p>국내외 유수 기업부터 스타트업까지,</p>
					<p>다양한 백그라운드의 </p>
					<p>마케팅, 브랜딩, 제품기획가가 함께 합니다.</p>
				</div>
			</div>
		</div>
	);
}
