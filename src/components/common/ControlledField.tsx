import { Controller, useFormContext } from "react-hook-form"

import Inputfield, { InputfieldProps } from "./Inputfield"

function ControlledField({ name, ...props }: ControlledFieldProps) {
	const { control } = useFormContext()

	return (
		<Controller
			name={name}
			control={control}
			render={(controlProps) => <Inputfield {...controlProps} {...props} />}
		/>
	)
}

export default ControlledField

interface ControlledFieldProps extends InputfieldProps {
	name: string
}
