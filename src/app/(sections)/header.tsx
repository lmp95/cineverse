"use client"

import Typography from "@/components/common/Typography"
import Image from "next/image"
import { useEffect, useState } from "react"

function Header() {
	const [scrollPosition, setScrollPosition] = useState<number>(0)

	useEffect(() => {
		window.addEventListener("scroll", () => setScrollPosition(window.scrollY))

		return () => {
			window.removeEventListener("scroll", () => setScrollPosition(0))
		}
	}, [])

	return (
		<header
			className={`fixed z-[99] ${scrollPosition > 50 ? "bg-black/70" : "bg-transparent"} duration-500  w-screen h-[96px] flex items-center gap-x-2 px-4`}>
			<Image src="/images/logo.png" alt="Cineverse" width={80} height={80} />
			<Typography variant="title" className="text-white" uppercase bold>
				Cineverse
			</Typography>
		</header>
	)
}

export default Header
