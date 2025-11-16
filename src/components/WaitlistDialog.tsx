"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { z } from "zod";

const formSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(100),
  lastName: z.string().trim().min(1, "Last name is required").max(100),
  age: z
    .preprocess((val) => Number(val), z.number().int().min(13).max(120))
    .refine((val) => !Number.isNaN(val), { message: "Age is required" }),
  email: z.string().trim().email("Enter a valid email address"),
});

type FormValues = {
  firstName: string;
  lastName: string;
  age: string;
  email: string;
};

const initialValues: FormValues = {
  firstName: "",
  lastName: "",
  age: "",
  email: "",
};

interface WaitlistDialogProps {
  onClose: () => void;
  onSuccess: () => void;
}

function WaitlistDialog({ onClose, onSuccess }: WaitlistDialogProps) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
      if (event.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<
          HTMLButtonElement | HTMLInputElement | HTMLAnchorElement
        >("button, [href], input, textarea, select, [tabindex]:not([tabindex='-1'])");
        const focusArray = Array.from(focusable);
        if (focusArray.length === 0) {
          return;
        }
        const first = focusArray[0];
        const last = focusArray[focusArray.length - 1];
        if (event.shiftKey) {
          if (document.activeElement === first) {
            event.preventDefault();
            (last as HTMLElement).focus();
          }
        } else if (document.activeElement === last) {
          event.preventDefault();
          (first as HTMLElement).focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    firstFieldRef.current?.focus();
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const consentText = useMemo(
    () => (
      <p className="text-xs text-white/60">
        By submitting, you confirm you are 13+ and agree to our{" "}
        <a
          className="text-[var(--aeon-tint)] underline"
          href="https://www.engineailabs.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>{" "}
        and{" "}
        <a
          className="text-[var(--aeon-tint)] underline"
          href="https://www.engineailabs.com/terms"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms
        </a>
        .
      </p>
    ),
    []
  );

  const handleChange = (field: keyof FormValues) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setServerError(null);
    const parsed = formSchema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        const key = issue.path[0];
        if (typeof key === "string") {
          fieldErrors[key] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("/api/waitinglist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: parsed.data.firstName,
          lastName: parsed.data.lastName,
          age: Number(parsed.data.age),
          email: parsed.data.email,
        }),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        throw new Error(payload.error || "Unable to submit waiting list form.");
      }

      setValues(initialValues);
      onSuccess();
      setTimeout(() => onClose(), 1500);
    } catch (error) {
      setServerError(
        error instanceof Error
          ? error.message
          : "Unable to submit waiting list form."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
      role="dialog"
      aria-modal="true"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={dialogRef}
        className="w-full max-w-md rounded-3xl border border-white/15 bg-[var(--aeon-card)] p-8 shadow-[0_35px_160px_rgba(138,180,255,0.35)] ring-1 ring-[rgba(138,180,255,0.25)]"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-white">
            Aeon App Waiting List
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="text-white/70 transition hover:text-white"
          >
            ✕
          </button>
        </div>
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm text-white/70">First name</label>
            <input
              ref={firstFieldRef}
              type="text"
              className="mt-1 w-full rounded-xl border border-white/15 bg-black/40 px-4 py-2 text-white focus:border-[var(--aeon-tint)] focus:outline-none"
              value={values.firstName}
              onChange={handleChange("firstName")}
            />
            {errors.firstName && (
              <p className="mt-1 text-xs text-red-400">{errors.firstName}</p>
            )}
          </div>
          <div>
            <label className="block text-sm text-white/70">Last name</label>
            <input
              type="text"
              className="mt-1 w-full rounded-xl border border-white/15 bg-black/40 px-4 py-2 text-white focus:border-[var(--aeon-tint)] focus:outline-none"
              value={values.lastName}
              onChange={handleChange("lastName")}
            />
            {errors.lastName && (
              <p className="mt-1 text-xs text-red-400">{errors.lastName}</p>
            )}
          </div>
          <div>
            <label className="block text-sm text-white/70">Age (13+)</label>
            <input
              type="number"
              min={13}
              className="mt-1 w-full rounded-xl border border-white/15 bg-black/40 px-4 py-2 text-white focus:border-[var(--aeon-tint)] focus:outline-none"
              value={values.age}
              onChange={handleChange("age")}
            />
            {errors.age && (
              <p className="mt-1 text-xs text-red-400">{errors.age}</p>
            )}
          </div>
          <div>
            <label className="block text-sm text-white/70">Email</label>
            <input
              type="email"
              className="mt-1 w-full rounded-xl border border-white/15 bg-black/40 px-4 py-2 text-white focus:border-[var(--aeon-tint)] focus:outline-none"
              value={values.email}
              onChange={handleChange("email")}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-400">{errors.email}</p>
            )}
          </div>
          {serverError && (
            <p className="text-sm text-red-400">{serverError}</p>
          )}
          {consentText}
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-white transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--aeon-tint)]"
            style={{ backgroundColor: "rgba(138, 180, 255, 0.65)" }}
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export function WaitlistTrigger({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const handleSuccess = () => {
    setToast("Thanks! Check your email for confirmation.");
    setOpen(false);
    setTimeout(() => setToast(null), 4000);
  };

  return (
    <>
      <button
        type="button"
        className={className}
        style={style}
        onClick={() => setOpen(true)}
      >
        Aeon App Waiting List
      </button>
      {open && (
        <WaitlistDialog
          onClose={() => setOpen(false)}
          onSuccess={handleSuccess}
        />
      )}
      {toast && (
        <div className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2 rounded-full border border-white/10 bg-[var(--aeon-card)] px-6 py-3 text-sm text-white shadow-[0_25px_90px_rgba(138,180,255,0.25)]">
          {toast}
        </div>
      )}
    </>
  );
}
