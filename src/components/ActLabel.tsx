// ---- 类型 ----
type ActLabelColor = 'accent' | 'accent-muted' | 'bg-primary'

const colorClasses: Record<ActLabelColor, { text: string; bg: string }> = {
  accent:       { text: 'text-accent',       bg: 'bg-accent' },
  'accent-muted': { text: 'text-accent-muted', bg: 'bg-accent-muted' },
  'bg-primary': { text: 'text-bg-primary',   bg: 'bg-bg-primary' },
}

// ---- 组件 ----
interface ActLabelProps {
  children: string
  className?: string
  color?: ActLabelColor
}

export function ActLabel({ children, className = '', color = 'accent' }: ActLabelProps) {
  const c = colorClasses[color]

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <span className={`act-label whitespace-pre-line ${c.text}`}>{children}</span>
      <div className={`w-[28px] h-px ${c.bg}`} />
    </div>
  )
}
