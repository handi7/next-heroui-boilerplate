"use client";

import Button from "@/components/shared/Button";
import InputAutocomplete from "@/components/shared/InputAutocomplete";
import InputCheckbox from "@/components/shared/InputCheckbox";
import InputDate from "@/components/shared/InputDate";
import InputNumber from "@/components/shared/InputNumber";
import InputRadio from "@/components/shared/InputRadio";
import InputSelect from "@/components/shared/InputSelect";
import InputText from "@/components/shared/InputText";

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
