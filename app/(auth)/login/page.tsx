"use client";

import { Alert, Card, CardBody, CardHeader, Link } from "@heroui/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { login } from "@/actions/auth.action";
import Button from "@/components/shared/Button";
import Icon from "@/components/shared/Icon";
import InputText from "@/components/shared/InputText";
import { LoginInput } from "@/types/auth.type";

export default function LoginPage() {
  const { control, handleSubmit, formState } = useForm<LoginInput>();

  const [errorMessage, setErrorMessage] = useState<string>();

  const onSubmit = async (data: LoginInput) => {
    if (!data.email || !data.password) return;

    setErrorMessage("");

    const res = await login(data);

    setErrorMessage(res.message);
  };

  return (
    <div className="w-full min-h-[100dvh] flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md"
      >
        <Card className="w-full shadow-2xl">
          <CardHeader className="flex flex-col gap-1 px-8 pt-8 text-center">
            <h1 className="text-2xl font-bold text-default-900">Welcome Back</h1>
            <p className="text-sm text-default-500">Sign in to your account to continue</p>
          </CardHeader>

          <CardBody className="px-8 py-6 space-y-4">
            <AnimatePresence>
              {!!errorMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: -10, height: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Alert color="danger" description={errorMessage} />
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
              <InputText.WithControl
                control={control}
                name="email"
                label="Email"
                placeholder="Enter your email"
                startContent={<Icon name="at-sign" />}
              />

              <InputText.WithControl
                control={control}
                name="password"
                label="Password"
                placeholder="Enter your password"
                type="password"
                startContent={<Icon name="key" />}
              />

              <div className="flex justify-end">
                <Link href="#" size="sm" className="text-primary-500">
                  Forgot password?
                </Link>
              </div>

              <Button type="submit" isLoading={formState.isSubmitting}>
                Sign In
              </Button>
            </form>
          </CardBody>
        </Card>
      </motion.div>
    </div>
  );
}
