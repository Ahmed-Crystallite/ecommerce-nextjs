import React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef(({ className, label = false, title, checked, onChange }, ref) => {
  const id = React.useId();

  return (
    <div className="flex items-center gap-3  mb-5">
      <CheckboxPrimitive.Root
        ref={ref}
        id={id}
        className={cn(
          "peer h-5 w-5 shrink-0 rounded-sm border border-primary/40 shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-yellow-500 data-[state=checked]:text-black",
          className
        )}
        checked={checked}
        onCheckedChange={onChange}
      >
        <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center text-current")}>
          <CheckIcon className="h-5 w-5" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      {label && (
        <label
          htmlFor={id}
          className="block text-base font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {title}
        </label>
      )}
    </div>
  );
});

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
