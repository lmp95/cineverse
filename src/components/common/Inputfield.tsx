import { InputHTMLAttributes } from "react"

import Typography from "./Typography"

function Inputfield({
	label,
	placeholder,
	className,
	fullWidth = false,
	type = "text",
}: InputfieldProps) {
	return (
		<div
			className={`flex focus-within:border-red-200 flex-col border-[1px] p-2 rounded-md ${fullWidth ? "w-full" : "w-auto"} ${className}`}>
			<Typography variant="small" uppercase bold className="text-black">
				{label}
			</Typography>
			<input
				className="mt-1 placeholder-gray-300 bg-transparent focus:ring-0 focus:outline-none text-black text-sm"
				type={type}
				placeholder={placeholder}
			/>
		</div>
	)
}

export default Inputfield

interface InputfieldProps {
	label: string
	type?: InputHTMLAttributes<HTMLInputElement>["type"]
	fullWidth?: boolean
	className?: InputHTMLAttributes<HTMLInputElement>["className"]
	placeholder?: string
}
