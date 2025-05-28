"use client";

import { Checkbox, CheckboxGroup, CheckboxGroupProps, CheckboxProps } from "@heroui/checkbox";
import { cn } from "@heroui/theme";
import React, { ReactNode } from "react";
import { Control, Controller, FieldValues, Path, RegisterOptions } from "react-hook-form";

function InputCheckbox(props: CheckboxProps) {
  return (
    <Checkbox size="sm" {...props}>
      {props.children}
    </Checkbox>
  );
}

type WithControlProps<T extends FieldValues> = CheckboxProps & {
  control: Control<T>;
  name: Path<T>;
  rules?: RegisterOptions<T, Path<T>>;
  children?: ReactNode;
};

function WithControl<T extends FieldValues>(props: WithControlProps<T>) {
  const { control, name, rules, ...rest } = props;

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => (
        <InputCheckbox {...field} {...rest} isInvalid={fieldState.invalid}>
          {props.children}
        </InputCheckbox>
      )}
    />
  );
}

interface CheckboxGroupOption {
  value: any;
  label: string;
  props?: CheckboxProps;
}

export type CheckboxGroupOptions = CheckboxGroupOption[];

interface GroupProps extends Omit<CheckboxGroupProps, "children"> {
  options: CheckboxGroupOptions;
}

function Group({ options, ...props }: GroupProps) {
  return (
    <CheckboxGroup
      size="sm"
      {...props}
      classNames={{
        label: cn(
          "text-xs text-foreground",
          { "text-danger": props.isInvalid },
          props.classNames?.label,
        ),
      }}
    >
      {options.map((option) => (
        <InputCheckbox key={option.value} value={option.value} {...option.props}>
          {option.label}
        </InputCheckbox>
      ))}
    </CheckboxGroup>
  );
}

interface GroupControlProps<T extends FieldValues> extends GroupProps {
  control: Control<T>;
  name: Path<T>;
  rules?: RegisterOptions<T, Path<T>>;
}

function GroupControl<T extends FieldValues>(props: GroupControlProps<T>) {
  const { control, name, rules, ...rest } = props;

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => {
        return (
          <Group
            {...rest}
            {...field}
            isInvalid={fieldState.invalid}
            errorMessage={fieldState.error?.message}
          />
        );
      }}
    />
  );
}

InputCheckbox.WithControl = WithControl;
InputCheckbox.Group = Group;
InputCheckbox.GroupControl = GroupControl;

export default InputCheckbox;
