"use client";

import { Input, InputProps } from "@heroui/input";
import React from "react";
import { Control, Controller, FieldValues, Path, RegisterOptions } from "react-hook-form";

function InputText(props: InputProps) {
  return (
    <Input
      variant="bordered"
      size="sm"
      radius="sm"
      labelPlacement="outside"
      placeholder="Type here"
      {...props}
    />
  );
}

type WithControlProps<T extends FieldValues> = InputProps & {
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
      render={({ field, fieldState }) => (
        <InputText
          {...field}
          {...rest}
          isInvalid={!!fieldState.error}
          errorMessage={fieldState.error?.message}
        />
      )}
    />
  );
}

InputText.WithControl = WithControl;

export default InputText;
