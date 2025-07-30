"use client";

import { InputHTMLAttributes, DetailedHTMLProps } from 'react';

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

const Input = (props: InputProps) => (
  <input {...props} className="border p-2 rounded w-full" />
);

export default Input;
