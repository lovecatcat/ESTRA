interface ActLabelProps {
  /** 例如 "ACT 1\nOPENING" */
  children: string
  className?: string
}

export function ActLabel({ children, className = '' }: ActLabelProps) {
  return (
    <span className={`act-label whitespace-pre-line ${className}`}>
      {children}
    </span>
  )
}
