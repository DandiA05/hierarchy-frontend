import React from 'react'
import { FormLabel, MenuItem, Select } from '@mui/material'
import { Control, Controller } from 'react-hook-form'

interface Data {
  value: string
  label: string
  disable?: boolean
}

interface Props {
  label: string
  data: Data[]
  htmlFor: string
  control: Control<any>
  name: string
  defaultValue?: string
  placeholder?: string
  isDisabled?: boolean
  isMedia?: boolean
}

export default function SelectForm({
  label,
  data,
  htmlFor,
  control,
  name,
  defaultValue = '',
  placeholder = 'Placeholder Text',
  isDisabled = false,
  isMedia = false,
}: Readonly<Props>) {
  return (
    <div className={`flex flex-col ${isMedia ? `w-[150px]` : 'w-full'} gap-[6px]`}>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field, formState: { errors } }) => (
          <>
            <FormLabel htmlFor={htmlFor} sx={{ color: '#404040', fontSize: 14, fontWeight: 500 }}>
              {label}
            </FormLabel>
            <Select
              {...field}
              disabled={isDisabled}
              displayEmpty={true}
              renderValue={value => {
                if (!value) {
                  return placeholder
                }
                const selectedItem = data.find(item => item.value === value)
                return selectedItem ? selectedItem.label : value
              }}
              inputProps={{
                name: htmlFor,
                id: htmlFor,
              }}
              IconComponent={isDisabled ? () => null : undefined}
              sx={{
                maxHeight: '41px',
                borderWidth: '1px',
                borderRadius: '8px',
                borderColor: errors?.[name] ? '#F53D3D' : '#E0E0E0',
                backgroundColor: isDisabled ? '#F3F3F3' : '#FFFFFF',
                [`& #mui-component-select-${htmlFor}`]: {
                  padding: '10px 14px',
                  fontSize: 14,
                  color: '#404040',
                },
              }}
            >
              {data?.map(e => (
                <MenuItem key={e.value} value={e.value} disabled={e.disable} sx={{ fontSize: 14, color: '#404040' }}>
                  {e.label}
                </MenuItem>
              ))}
            </Select>
            {errors?.[name]?.message && (
              <span className="text-xs text-error">{errors?.[name]?.message?.toString()}</span>
            )}
          </>
        )}
      />
    </div>
  )
}
