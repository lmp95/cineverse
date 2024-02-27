import { ButtonHTMLAttributes } from "react"

function FilledButton({ variant = "default", ...props }: FilledButtonProps) {
	let bgColor = "bg-gray-500"

	switch (variant) {
		case "primary":
			bgColor = "bg-red-500"
			break
		case "secondary":
			bgColor = "bg-green-500"
			break
	}

	return (
		<button
			type="button"
			className={`w-full tracking-wider font-semibold mt-4 rounded-md ${bgColor} text-white p-3`}>
			{props.children}
		</button>
	)
}

export default FilledButton

interface FilledButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary" | "default"
}
