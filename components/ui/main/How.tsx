import Image from "next/image";
import { useLayoutEffect } from "react";
import useGsap from "../../utils/useGsap";

export default function How() {
	const gsap = useGsap();
	useLayoutEffect(() => {
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

			tl.from(
				".how-bg",
				{
					x: () =>
						-(container.scrollHeight + document.documentElement.clientWidth),
				},
				0,
			)
				.to(
					".how-bg",
					{
						x: () => 0,
					},
					0,
				)
				.from(
					".how-message",
					{ y: 100, opacity: 0, stagger: 0.4, duration: 0.8, delay: 2 },
					0,
				);
			return () => {
				tl.revert();
			};
		}
	});
	return (
		<div className="how-container relative flex h-[560px] flex-col overflow-hidden bg-[#FE8D2F] lg:h-[720px]">
			<div className="hidden lg:block">
				<Image
					alt="how-bg"
					src="/images/main/how_bg_web.png"
					width={960}
					height={663}
					className="how-bg absolute left-0 bottom-0 z-[-2]"
				/>
			</div>
			<div className="block lg:hidden">
				<Image
					alt="how-bg"
					src="/images/main/how_bg_mobile.png"
					width={360}
					height={280}
					className="how-bg absolute bottom-0 z-[-2]"
				/>
			</div>
			<div className="mx-auto mt-[64px] mb-0 mr-0 flex w-full flex-auto flex-col gap-y-[20px] px-[36px] text-center font-semibold lg:mt-0 lg:ml-[96px] lg:mb-[120px] lg:w-auto lg:justify-end lg:text-right">
				<div className="how-message text-[16px] leading-[24px]">
					<span>Think hard </span>
					<span className="text-primary">Do bold</span>
				</div>
				<div className="how-message text-[20px] leading-[36px] lg:text-[40px] lg:leading-[56px]">
					<p>
						비즈니스의 Pain point를 <br />
						정확히 판단하고,
					</p>
					<p>
						성장에 필요한 전략과 <br />
						실행안을 제안합니다.
					</p>
				</div>
			</div>
		</div>
	);
}
