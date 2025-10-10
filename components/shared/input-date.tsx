"use client";

import { DatePicker, DatePickerProps } from "@heroui/react";
import { getLocalTimeZone, parseAbsoluteToLocal } from "@internationalized/date";
import React from "react";
import { Control, Controller, FieldValues, Path, RegisterOptions } from "react-hook-form";

function InputDate(props: DatePickerProps) {
  const today = new Date().toISOString().split("T")[0];

  return (
    <DatePicker
      variant="bordered"
      size="sm"
      radius="sm"
      labelPlacement="outside"
      {...props}
      classNames={{
        calendar: ` [&_[data-date="${today}"]]:relative [&_[data-date="${today}"]::after]:content-[''] [&_[data-date="${today}"]::after]:absolute [&_[data-date="${today}"]::after]:bottom-1 [&_[data-date="${today}"]::after]:left-1/2 [&_[data-date="${today}"]::after]:-translate-x-1/2 [&_[data-date="${today}"]::after]:w-1.5 [&_[data-date="${today}"]::after]:h-1.5 [&_[data-date="${today}"]::after]:rounded-full [&_[data-date="${today}"]::after]:bg-primary`,
      }}
    />
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
