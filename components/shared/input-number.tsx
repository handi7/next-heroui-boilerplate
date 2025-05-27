"use client";

import { NumberInput, NumberInputProps } from "@heroui/number-input";
import React from "react";
import { Control, Controller, FieldValues, Path, RegisterOptions } from "react-hook-form";

function InputNumber(props: NumberInputProps) {
  return (
    <NumberInput
      variant="bordered"
      size="sm"
      radius="sm"
      labelPlacement="outside"
      placeholder="0"
      {...props}
    />
  );
}

type WithControlProps<T extends FieldValues> = NumberInputProps & {
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
      render={({ field: { onChange, ...field }, fieldState }) => (
        <InputNumber
          {...field}
          {...rest}
          onValueChange={(value) => onChange(value)}
          isInvalid={!!fieldState.error}
          errorMessage={fieldState.error?.message}
        />
      )}
    />
  );
}

InputNumber.WithControl = WithControl;

export default InputNumber;
