interface PrincipleCardProps {
  title: string
  description: string
}

export function PrincipleCard({ title, description }: PrincipleCardProps) {
  return (
    <div className="group flex flex-col items-center text-center gap-3 p-6 rounded-sm border border-transparent hover:border-border hover:bg-bg-card/50 transition-all duration-500">
      <h3 className="text-[36px] leading-[1.17] text-accent whitespace-pre-line transition-colors duration-300 group-hover:text-white">
        {title}
      </h3>
      <p className="text-lg leading-[1.17] text-accent/60 whitespace-pre-line max-w-[200px] transition-colors duration-300 group-hover:text-accent">
        {description}
      </p>
    </div>
  )
}
