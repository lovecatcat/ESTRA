import { type ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'ghost'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  href?: string
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'border border-accent/40 text-accent hover:bg-accent hover:text-bg-primary active:bg-accent/90 transition-all duration-300',
  ghost:
    'text-accent hover:text-white hover:underline underline-offset-4 transition-all duration-200',
}

export function Button({
  variant = 'primary',
  className = '',
  children,
  href,
  ...rest
}: ButtonProps) {
  const base = 'inline-flex items-center gap-2 px-5 py-2 text-sm font-medium tracking-wider uppercase cursor-pointer'

  // 如果是链接，渲染 <a>
  if (href) {
    return (
      <a
        href={href}
        className={`${base} ${variantClasses[variant]} ${className}`}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      className={`${base} ${variantClasses[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
