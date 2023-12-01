import React from "react"
import './styles.scss'

type InputProps = {
  type?: React.HTMLInputTypeAttribute
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  value?: string | number,
  label: string,
  name: string,
  disabled?: boolean,
  placeholder?: string,
  error?: string,
}

export const Input = ({ 
  type='text',
  onChange,
  value,
  label,
  name,
  placeholder,
  disabled,
  error,
  children,
  ...rest
}: React.PropsWithChildren<InputProps>) => {
  
  return (
    <div className="input-wrapper">
      <label htmlFor={name}>{label}</label>
      <input 
        type={type}
        id={name}
        name={name}
        placeholder={placeholder ?? ''}
        value={value}
        onChange={onChange}
        disabled={disabled}
        {...rest}
      />
      {children}
      {error && <div className="input-error">{error}</div>}
    </div>
  )
}