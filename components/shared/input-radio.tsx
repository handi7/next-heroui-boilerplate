"use client";

import { Radio, RadioGroup, RadioGroupProps, RadioProps } from "@heroui/react";
import { cn } from "@heroui/theme";
import React from "react";
import { Control, Controller, FieldValues, Path, RegisterOptions } from "react-hook-form";

interface InputRadioOption {
  value: string;
  label: string;
  props?: RadioProps;
}

export type InputRadioOptions = InputRadioOption[];

interface Props extends RadioGroupProps {
  options: InputRadioOptions;
}

function InputRadio({ options, ...props }: Props) {
  return (
    <RadioGroup
      size="sm"
      classNames={{
        label: cn(
          "text-sm text-foreground font-medium",
          { "text-danger": props.isInvalid },
          props.classNames?.label,
        ),
      }}
      {...props}
    >
      {options.map((option, index) => (
        <Radio
          key={index}
          value={option.value}
          {...option.props}
          classNames={{
            ...option.props?.classNames,
            label: cn("text-sm", option.props?.classNames?.label),
          }}
        >
          {option.label}
        </Radio>
      ))}
    </RadioGroup>
  );
}

type WithControlProps<T extends FieldValues> = RadioGroupProps & {
  control: Control<T>;
  name: Path<T>;
  rules?: RegisterOptions<T, Path<T>>;
  options: InputRadioOptions;
};

function WithControl<T extends FieldValues>(props: WithControlProps<T>) {
  const { control, name, rules, ...rest } = props;

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => (
        <InputRadio
          {...field}
          {...rest}
          isInvalid={!!fieldState.error}
          errorMessage={fieldState.error?.message}
        />
      )}
    />
  );
}

InputRadio.WithControl = WithControl;

export default InputRadio;
