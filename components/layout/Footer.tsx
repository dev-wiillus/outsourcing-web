import Image from "next/image";

function Footer() {
	return (
		<footer className="mt-auto flex h-[259px] w-full flex-col gap-y-6 bg-black py-10 pl-8 md:mb-0 md:h-[303px]">
			<div className="flex flex-col gap-y-2.5">
				<Image
					src="/images/logo/wiillus_black.png"
					alt="Logo"
					width={59}
					height={59}
					priority
				/>
				<div className="flex flex-col gap-y-2.5 text-2xs text-text-secondary">
					<p>
						<span>대표 이해찬 | hello@wiillus.com</span>
					</p>
					<p>
						<span>주소: 서울시 용산구 이태원로 223-5 2층</span>
					</p>
					{/* <p>
						<span>개인정보처리담당 김창민 | robin@wiillus.com</span>
					</p> */}
				</div>
			</div>
			<div className="flex flex-col gap-y-2 text-2xs font-semibold text-text-light-primary">
				{/* TODO: 기능 필요 */}
				{/* TODO: mvp 단계에서는 주석처리 */}
				{/* <p>
					<span>개인정보 처리방침</span>
				</p>
				<p>
					<span>Contact</span>
				</p> */}
			</div>
			<div className="text-3xs text-text-secondary">
				<span>Copyright © 2022 Wiillus All Rights Reserved.</span>
			</div>
		</footer>
	);
}

export default Footer;
