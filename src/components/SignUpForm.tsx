"use client";

import { FormEvent, useRef, useState } from "react";
import { Button } from "./Button";

export function SignUpForm() {
  const [input, setInput] = useState("");

  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Form submitted"); // Add this line

    const email = input;
    const button = buttonRef.current;

    if (!email || !button) return;

    try {
      const res = await fetch("/api/addSubscription", {
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      console.log("Response data:", data); // Add this line
    } catch (error) {
      console.error("An error occurred while submitting the form:", error);
    }
  };

  return (
    <form className="relative isolate mt-8 flex items-center pr-1" onSubmit={handleSubmit}>
      <label className="sr-only">
        Email address
      </label>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Email address"
        required
        type="email"
        className="peer w-0 flex-auto bg-transparent px-4 py-2.5 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-[0.8125rem]/6"
      />
      <Button type="submit" arrow>
        Get updates
      </Button>
      <div className="absolute inset-0 -z-10 rounded-lg transition peer-focus:ring-4 peer-focus:ring-sky-300/15" />
      <div className="absolute inset-0 -z-10 rounded-lg bg-white/2.5 ring-1 ring-white/15 transition peer-focus:ring-sky-300" />
    </form>
  )
}
