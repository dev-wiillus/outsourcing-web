import Navigation from "./Navigation";

function Homebar() {
	return (
		<section className="fixed bottom-0 z-10 w-full bg-white lg:hidden">
			<div className="my-[16px] flex h-[56px] items-center justify-around">
				<Navigation />
			</div>
		</section>
	);
}

export default Homebar;
