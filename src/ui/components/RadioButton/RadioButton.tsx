import React, { FC } from 'react'
import { StyledRadioButton } from './RadioButton.styles'

export interface RadioButtonProps {
  name: string;
  value: string;
  onChange: (e: any) => void;
}

const RadioButton: FC<RadioButtonProps> = ({name, value, onChange}) => {
  return (
    <StyledRadioButton type='radio' name={name} value={value} onChange={onChange}/>
  )
}

export default RadioButton