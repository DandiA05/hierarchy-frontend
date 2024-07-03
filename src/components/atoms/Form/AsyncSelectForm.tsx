import React from 'react'
import { Autocomplete, FormLabel, TextField } from '@mui/material'
import { Control, Controller } from 'react-hook-form'
import { debounce } from 'lodash'

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
  defaultValue: Data[]
  placeholder?: string
  isDisabled?: boolean
  isMedia?: boolean
  btnType?: string
}

export default function AsyncSelectForm({
  label,
  data,
  htmlFor,
  control,
  name,
  defaultValue,
  placeholder = 'Placeholder Text',
  isDisabled = false,
  isMedia = false,
}: Readonly<Props>) {
  return (
    <div className={`flex flex-col ${isMedia ? `w-[150px]` : 'w-full'} gap-[6px]`}>
      <Controller
        control={control}
        name={name}
        // defaultValue={defaultValue}
        render={({ field: { onChange, ...field }, formState: { errors } }) => (
          <>
            <FormLabel htmlFor={htmlFor} sx={{ color: '#404040', fontSize: 14, fontWeight: 500 }}>
              {label}
            </FormLabel>
            <Autocomplete
              defaultValue={defaultValue[0]}
              options={data}
              onChange={(_, data) => {
                return onChange(data)
              }}
              getOptionLabel={option => {
                return option.label ?? option
              }}
              isOptionEqualToValue={(option: any, value: any) => option.value === value}
              renderInput={params => (
                <TextField
                  {...params}
                  {...field}
                  placeholder={placeholder}
                  error={!!errors?.[name]}
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      padding: 0,
                      maxHeight: '41px',
                      borderWidth: '1px',
                      borderRadius: '8px',
                      borderColor: errors?.[name] ? '#F53D3D' : '#E0E0E0',
                      backgroundColor: isDisabled ? '#F3F3F3' : '#FFFFFF',
                      [`& .MuiSelect-select`]: {
                        padding: '10px 14px',
                        fontSize: 14,
                        color: '#404040',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: errors?.[name] ? '#F53D3D' : '#E0E0E0',
                      },
                      '& .MuiAutocomplete-input': {
                        padding: 0,
                      },
                    },
                  }}
                  InputProps={{
                    ...params.InputProps,
                    style: {
                      padding: '10px 14px',
                      fontSize: 14,
                      color: '#404040',
                    },
                  }}
                />
              )}
              renderOption={(props, option) => (
                <li {...props} key={option.value} style={{ fontSize: 14, color: '#404040' }}>
                  {option.label}
                </li>
              )}
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
