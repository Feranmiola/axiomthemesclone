"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}

function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

function SheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

function SheetPortal({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <SheetPrimitive.Overlay
        data-slot="sheet-overlay"
        className={cn("fixed inset-0 z-50 bg-black/50", className)}
        {...props}
      />
    </motion.div>
  );
}

function SheetContent({
  className,
  children,
  side = "right",
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: "top" | "right" | "bottom" | "left";
}) {
  const variants = {
    top: {
      initial: { y: "-100%", opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: "-100%", opacity: 0 },
    },
    right: {
      initial: { x: "100%", opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: "100%", opacity: 0 },
    },
    bottom: {
      initial: { y: "100%", opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: "100%", opacity: 0 },
    },
    left: {
      initial: { x: "-100%", opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: "-100%", opacity: 0 },
    },
  };

  return (
    <SheetPortal>
      <SheetOverlay />
      <motion.div
        initial={variants[side].initial}
        animate={variants[side].animate}
        exit={variants[side].exit}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25,
          mass: 0.5,
          restDelta: 0.001,
        }}
      >
        <SheetPrimitive.Content
          data-slot="sheet-content"
          className={cn(
            "bg-background fixed z-50 flex flex-col gap-4 shadow-lg",
            side === "right" && "inset-y-0 right-0 h-full w-3/4 sm:max-w-sm",
            side === "left" &&
              "inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
            side === "top" && "inset-x-0 top-0 h-auto",
            side === "bottom" && "inset-x-0 bottom-0 h-auto border-t",
            className
          )}
          {...props}
        >
          {children}
        </SheetPrimitive.Content>
      </motion.div>
    </SheetPortal>
  );
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-1.5 p-4", className)}
      {...props}
    />
  );
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  );
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("text-foreground font-semibold", className)}
      {...props}
    />
  );
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
