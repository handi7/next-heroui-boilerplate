# Next Js + HeroUI Boilerplate

A boilerplate to accelerate frontend development using [Next.js](https://nextjs.org/) and [HeroUI](https://www.heroui.dev/). Includes Tailwind CSS with custom theming, fetch interceptor, `useFetch` hook, reusable components, ESLint, and Prettier setup.

## ✨ Features

- 📝 Built-in integration with [react-hook-form](https://react-hook-form.com) for all form components
- ⚙️ Next.js setup
- 🎨 HeroUI + Tailwind CSS with light & dark mode support
- 📡 Fetch Interceptor with token auto-refresh
- 🧲 Custom `useFetch` hook
- 🧩 Reusable components:
  - Input Text
  - Input Number
  - Input Checkbox
  - Input Radio
  - Input Select
  - Input Date
  - Button
- ✅ ESLint & Prettier configured
- 📁 Modular, scalable folder structure

## 📂 Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [API Utility & useFetch](#api-utility--usefetch)
- [Environment Variables](#environment-variables)
- [Form Components with React Hook Form](#-form-components-with-react-hook-form)
- [Color Configuration](#color-configuration)
- [Troubleshooting](#troubleshooting)
- [Contributors](#contributors)
- [License](#license)

## 🛠️ Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/handi7/next-heroui-boilerplate.git
   cd next-heroui-boilerplate
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

## 🚀 Usage

Start coding by adding new pages in the `app/` directory or components in `components/`.

## 📁 Folder Structure

```
.
├── app/                 # Next.js App Router (pages/layouts)
├── components/          # Reusable UI components
├── config/              # Application configuration
├── hooks/               # Custom React hooks (including useFetch)
├── styles/              # Global styles & Tailwind config
├── types/               # TypeScript interfaces/types
├── public/              # Static files
├── .vscode/             # Local editor settings
├── .env.example         # Example environment variables
├── .prettierrc          # Prettier configuration
├── eslint.config.mjs    # ESLint configuration
├── tailwind.config.js   # Tailwind configuration
└── ...
```

## 📡 API Utility & useFetch

### 🔁 API Interceptor (`/actions/api.ts`)

This utility wraps native fetch with:

- Authorization header from cookies
- Automatic token refresh
- Custom request/response interceptors
- Prebuilt functions: `apiGET`, `apiPOST`, `apiPUT`, `apiDELETE`

#### Usage with Generics:

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

const response = await apiGET<User>("/user/profile");

if (response.success) {
  console.log(response.data?.name);
} else {
  console.error(response.error?.message);
}
```

### 🧲 useFetch Hook (`/hooks/useFetch.ts`)

Simplifies GET requests with auto-handling of loading, error, and refetch.

```tsx
import useFetch from "@/hooks/useFetch";

interface UserProfile {
  id: number;
  name: string;
  email: string;
}

const { data, isLoading, error } = useFetch<UserProfile>("/user/profile");

if (isLoading) return <p>Loading...</p>;
if (error) return <p>Error: {error.message}</p>;

return <p>Welcome, {data?.name}</p>;
```

### 📦 Response Interfaces

```ts
interface ApiResponse<T = any, M = any> {
  path?: string;
  timestamp?: string;
  responseTime?: string;
  statusCode?: number;
  success?: boolean;
  data?: T;
  meta?: M;
  error?: ApiErrorResponse;
}

interface ApiErrorResponse {
  type?: string;
  message?: string;
  errors?: Record<string, any>;
}
```

## 🔐 Environment Variables

Create a `.env.local` file in the root directory and define the required variables:

```env
API_URL=https://api.example.com
```

### Notes:

- `API_URL` is required for all API calls to work correctly.
- Never commit `.env.local` to public repositories. It is ignored by Git via `.gitignore`.

## 📝 Form Components with React Hook Form

This boilerplate includes form components that are pre-integrated with `react-hook-form`.

### ✅ Example: Controlled InputText & InputNumber

```tsx
import { Button } from "@heroui/button";
import { SubmitHandler, useForm } from "react-hook-form";

import InputNumber from "@/components/shared/input-number";
import InputText from "@/components/shared/input-text";

interface FormValues {
  name: string;
  age: number;
}

export default function ProfileForm() {
  const { control, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputText.WithControl control={control} name="name" label="Name" />
      <InputNumber.WithControl control={control} name="age" label="Age" />
      <Button type="submit">Submit</Button>
    </form>
  );
}
```

### ✅ Example: Controlled InputCheckbox.GroupControl

```tsx
<InputCheckbox.GroupControl
  control={control}
  name="hobbies"
  label="Hobbies"
  options={[
    { label: "Reading", value: "reading" },
    { label: "Gaming", value: "gaming" },
    { label: "Coding", value: "coding" },
  ]}
/>
```

### ✅ Example: Controlled InputRadio.WithControl

```tsx
<InputRadio.WithControl
  control={control}
  name="gender"
  label="Gender"
  options={[
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ]}
/>
```

### ✅ Example: Controlled InputSelect.WithControl

```tsx
<InputSelect.WithControl
  control={control}
  name="country"
  label="Country"
  options={[
    { label: "Indonesia", value: "ID" },
    { label: "Japan", value: "JP" },
    { label: "USA", value: "US" },
  ]}
/>
```

### ✅ Example: Controlled InputDate.WithControl

```tsx
<InputDate.WithControl control={control} name="birthdate" label="Birth Date" />
```

## 🎨 Color Configuration

Custom theme colors defined in CSS root. Supports light and dark mode.

```css
:root {
  --color-primary: 37 99 235;
  --color-secondary: 249 115 22;
  ...
}

.dark {
  --color-primary: 59 130 246;
  --color-secondary: 249 115 22;
  ...
}
```

## 🐞 Troubleshooting

- **Tailwind not working?** Ensure paths are correctly set in `tailwind.config.js`
- **Linting errors?** Run:
  ```bash
  npm run lint
  ```
- **Expired token issues?** Make sure the backend endpoint for refresh token is available.

## 👤 Contributors

- [@handi7](https://github.com/handi7)

## 📄 License

This project is licensed under the MIT License.

```
MIT License © 2025 handi7

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...

Read the full LICENSE file for details.
```
