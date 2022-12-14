import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

export default function useGsap() {
	gsap.registerPlugin(ScrollTrigger);
	return gsap;
}
