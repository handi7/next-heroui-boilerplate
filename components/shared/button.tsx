"use client";

import { ButtonProps, Button as HeroButton } from "@heroui/button";
import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren, ButtonProps {}

function Button({ children, ...props }: Props) {
  return (
    <HeroButton type="button" size="sm" color="primary" radius="sm" {...props}>
      {children}
    </HeroButton>
  );
}

export default Button;
