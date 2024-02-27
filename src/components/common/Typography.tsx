import { HTMLAttributes } from "react"

function Typography({ variant = "text", bold = false, ...props }: TypographyProps) {
	let size = "text-base"

	switch (variant) {
		case "heading":
			size = "text-[24px]"
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
			className={`${size} ${props.className} ${bold ? "font-semibold" : "font-normal"} text-gray-800`}>
			{props.children}
		</p>
	)
}

export default Typography

interface TypographyProps extends HTMLAttributes<HTMLParagraphElement> {
	variant?: "heading" | "title" | "subtitle" | "text" | "small"
	bold?: boolean
}
