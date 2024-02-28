import { ButtonHTMLAttributes } from "react"

function IconButton({ icon, ...props }: IconButtonProps): JSX.Element {
	return (
		<button
			{...props}
			className={`text-red-500 hover:text-gray-500 p-2 rounded-full ${props.className}`}>
			{icon}
		</button>
	)
}

export default IconButton

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	icon: JSX.Element
}
