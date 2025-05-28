"use client";

import { Select, SelectItem, SelectItemProps, SelectProps } from "@heroui/select";
import React from "react";
import { Control, Controller, FieldValues, Path, RegisterOptions } from "react-hook-form";

interface InputSelectOption {
  value: string;
  label: string;
  props?: SelectItemProps;
}

export type InputSelectOptions = InputSelectOption[];

interface Props extends Omit<SelectProps, "children"> {
  options: InputSelectOptions;
}

function InputSelect({ options, ...props }: Props) {
  return (
    <Select
      variant="bordered"
      size="sm"
      radius="sm"
      labelPlacement="outside"
      placeholder="Select one of the options"
      {...props}
    >
      {options.map((item) => (
        <SelectItem key={item.value}>{item.label}</SelectItem>
      ))}
    </Select>
  );
}

type WithControlProps<T extends FieldValues> = Omit<SelectProps, "children"> & {
  control: Control<T>;
  name: Path<T>;
  rules?: RegisterOptions<T, Path<T>>;
  options: InputSelectOptions;
};

function WithControl<T extends FieldValues>(props: WithControlProps<T>) {
  const { control, name, rules, ...rest } = props;

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => (
        <InputSelect
          {...field}
          {...rest}
          isInvalid={!!fieldState.error}
          errorMessage={fieldState.error?.message}
        />
      )}
    />
  );
}

InputSelect.WithControl = WithControl;

export default InputSelect;
