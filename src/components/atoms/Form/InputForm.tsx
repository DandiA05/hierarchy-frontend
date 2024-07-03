import React, { HTMLProps } from 'react'
import { FormLabel, InputAdornment, OutlinedInput } from '@mui/material'
import { Control, Controller } from 'react-hook-form'

interface Props extends HTMLProps<HTMLDivElement> {
  label?: string
  placeholder?: string
  disabled?: boolean
  htmlFor?: string
  type?: 'text' | 'number'
  control: Control<any>
  name: string
  leftComponent?: JSX.Element
}

export default function InputForm({
  label,
  placeholder,
  htmlFor,
  control,
  name,
  disabled,
  type,
  min,
  max,
  maxLength,
  defaultValue,
  leftComponent,
  readOnly,
}: Readonly<Props>) {
  const widthStyle = maxLength ? `w-[${maxLength}px]` : 'w-full'

  return (
    <div className={`flex flex-col gap-[6px] ${widthStyle}`}>
      <Controller
        defaultValue={defaultValue}
        control={control}
        name={name}
        render={({ field, formState: { errors } }) => (
          <>
            <FormLabel htmlFor={htmlFor} sx={{ color: '#404040', fontSize: 14, fontWeight: 500 }}>
              {label}
            </FormLabel>
            <OutlinedInput
              readOnly={readOnly}
              {...field}
              disabled={disabled}
              placeholder={placeholder}
              type={type ?? 'text'}
              inputProps={{ name: htmlFor, id: htmlFor, min, max }}
              sx={{
                backgroundColor: disabled ? '#F3F3F3' : 'transparent',
                borderWidth: '1px',
                borderRadius: '8px',
                borderColor: errors?.[name] ? '#F53D3D' : '#E0E0E0',
                [`& #${htmlFor}`]: {
                  padding: '10px 14px',
                  fontSize: 14,
                  color: '#404040',
                },
              }}
              endAdornment={leftComponent && <InputAdornment position="end">{leftComponent}</InputAdornment>}
            />
            {errors?.[name]?.message && (
              <span className="text-xs text-error">{errors?.[name]?.message?.toString()}</span>
            )}
          </>
        )}
      />
    </div>
  )
}
