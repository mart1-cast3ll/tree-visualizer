import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

export function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { className?: string }) {
  return (
    <button
      className={clsx('inline-flex items-center justify-center rounded-md bg-blue-500 px-3 py-1 text-sm font-medium text-white hover:bg-blue-600', className)}
      {...props}
    />
  );
}
