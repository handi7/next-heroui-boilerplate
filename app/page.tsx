"use client";

import Button from "@/components/shared/button";
import InputAutocomplete from "@/components/shared/input-autocomplete";
import InputCheckbox from "@/components/shared/input-checkbox";
import InputDate from "@/components/shared/input-date";
import InputNumber from "@/components/shared/input-number";
import InputRadio from "@/components/shared/input-radio";
import InputSelect from "@/components/shared/input-select";
import InputText from "@/components/shared/input-text";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <h1 className="text-lg font-semibold">Next Js with Hero UI</h1>

      <p className="text-sm text-gray-500">
        This is a simple example of a Next.js application using Hero UI components.
      </p>

      <div className="max-w-2xl flex flex-col gap-4">
        <InputText label="Text Input" />

        <InputAutocomplete label="Autocomplete" options={[]} />

        <InputCheckbox.Group
          label="Checkbox Group"
          options={[
            { value: "1", label: "Option 1" },
            { value: "2", label: "Option 2" },
          ]}
        />

        <InputRadio
          label="Radio Group"
          options={[
            { value: "1", label: "Option 1" },
            { value: "2", label: "Option 2" },
          ]}
        />

        <InputDate label="Date" />

        <InputNumber label="Number" />

        <InputSelect options={[{ value: "1", label: "Option 1" }]} />

        <Button>Button</Button>
      </div>
    </div>
  );
}
