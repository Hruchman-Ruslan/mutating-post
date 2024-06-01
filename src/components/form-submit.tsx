"use client";

import { useFormStatus } from "react-dom";

export interface FormSubmitProps {}

export default function FormSubmit({}: FormSubmitProps) {
  const { pending } = useFormStatus();

  if (pending) {
    return <p>Creating post ...</p>;
  }

  return (
    <>
      <button type="reset">Reset</button>
      <button>Create Post</button>
    </>
  );
}
