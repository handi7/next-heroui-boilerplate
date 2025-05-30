"use client";

import {
  Autocomplete,
  AutocompleteItem,
  AutocompleteItemProps,
  AutocompleteProps,
} from "@heroui/autocomplete";
import React from "react";
import { Control, Controller, FieldValues, Path, RegisterOptions } from "react-hook-form";

export interface AutocompleteOptionItem {
  value: string;
  label: string;
  props?: AutocompleteItemProps;
}

interface Props extends Omit<AutocompleteProps<AutocompleteOptionItem>, "children"> {
  options: AutocompleteOptionItem[];
}

function InputAutocomplete({ options, ...props }: Props) {
  return (
    <Autocomplete
      variant="bordered"
      size="sm"
      radius="sm"
      labelPlacement="outside"
      placeholder="Type to search"
      items={options}
      {...props}
    >
      {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
    </Autocomplete>
  );
}

type WithControlProps<T extends FieldValues> = Props & {
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
        <InputAutocomplete
          {...field}
          {...rest}
          onSelectionChange={onChange}
          isInvalid={!!fieldState.error}
          errorMessage={fieldState.error?.message}
        />
      )}
    />
  );
}

InputAutocomplete.WithControl = WithControl;

export default InputAutocomplete;
