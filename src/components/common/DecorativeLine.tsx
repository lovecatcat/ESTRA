interface DecorativeLineProps {
  width?: string
  className?: string
}

export function DecorativeLine({ width = '200px', className = '' }: DecorativeLineProps) {
  return (
    <div
      className={`hairline ${className}`}
      style={{ maxWidth: width }}
    />
  )
}
