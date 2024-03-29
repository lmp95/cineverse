import { HTMLAttributes } from "react"

function Typography({
	variant = "text",
	uppercase = false,
	bold = false,
	...props
}: TypographyProps) {
	let size = "text-base"

	switch (variant) {
		case "heading1":
			size = "text-[42px]"
			break
		case "heading2":
			size = "text-[28px]"
			break
		case "small":
			size = "text-[12px]"
			break
		case "title":
			size = "text-[20px]"
			break
		case "subtitle":
			size = "text-[18px]"
			break
	}

	return (
		<p
			{...props}
			className={`${size} ${uppercase ? "uppercase" : "normal-case"} ${props.className} ${bold ? "font-semibold" : "font-normal"} text-gray-800`}>
			{props.children}
		</p>
	)
}

export default Typography

interface TypographyProps extends HTMLAttributes<HTMLParagraphElement> {
	variant?: "heading1" | "heading2" | "title" | "subtitle" | "text" | "small"
	bold?: boolean
	uppercase?: boolean
}
