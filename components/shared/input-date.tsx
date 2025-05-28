"use client";

import { DatePicker, DatePickerProps } from "@heroui/date-picker";
import { getLocalTimeZone, parseAbsoluteToLocal } from "@internationalized/date";
import React from "react";
import { Control, Controller, FieldValues, Path, RegisterOptions } from "react-hook-form";

function InputDate(props: DatePickerProps) {
  return (
    <DatePicker variant="bordered" size="sm" radius="sm" labelPlacement="outside" {...props} />
  );
}

type WithControlProps<T extends FieldValues> = DatePickerProps & {
  control: Control<T>;
  name: Path<T>;
  rules?: RegisterOptions<T, Path<T>>;
};

function WithControl<T extends FieldValues>(props: WithControlProps<T>) {
  const { control, name, rules, ...rest } = props;

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value, onChange, ...field }, fieldState }) => {
        return (
          <InputDate
            {...field}
            {...rest}
            value={value ? parseAbsoluteToLocal(value) : undefined}
            onChange={(value) => onChange(value?.toDate(getLocalTimeZone()).toISOString())}
            isInvalid={!!fieldState.error}
            errorMessage={fieldState.error?.message}
          />
        );
      }}
    />
  );
}

InputDate.WithControl = WithControl;

export default InputDate;
