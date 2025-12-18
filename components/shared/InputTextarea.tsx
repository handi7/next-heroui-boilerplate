"use client";

import { TextAreaProps, Textarea } from "@heroui/react";
import { Control, Controller, FieldValues, Path, RegisterOptions } from "react-hook-form";

function InputTextarea(props: TextAreaProps) {
  return (
    <Textarea
      variant="bordered"
      labelPlacement="outside"
      placeholder="Type here"
      validationBehavior="aria"
      {...props}
    />
  );
}

type WithControlProps<T extends FieldValues> = TextAreaProps & {
  control: Control<T>;
  name: Path<T>;
  rules?: RegisterOptions<T, Path<T>>;
};

function WithControl<T extends FieldValues>(props: WithControlProps<T>) {
  const { control, name, rules = {}, ...rest } = props;

  if (props.isRequired) {
    rules.required = rules.required ?? "This field is required";
  }

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => (
        <InputTextarea
          {...field}
          {...rest}
          isInvalid={!!fieldState.error}
          errorMessage={fieldState.error?.message}
        />
      )}
    />
  );
}

InputTextarea.WithControl = WithControl;

export default InputTextarea;
