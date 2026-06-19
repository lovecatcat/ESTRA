import { useRef, useState } from 'react'

interface VideoPlayerProps {
  src: string
  poster: string
  className?: string
}

export function VideoPlayer({ src, poster, className = '' }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handleToggle = () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      video.play()
      setIsPlaying(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  const handleEnded = () => {
    setIsPlaying(false)
  }

  return (
    <div
      className={`relative aspect-[16/9] max-h-[clamp(340px,47vw,678px)] bg-black border-4 border-accent overflow-hidden group cursor-pointer ${className}`}
      onClick={handleToggle}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src={src}
        poster={poster}
        playsInline
        preload="metadata"
        onEnded={handleEnded}
      />

      {!isPlaying && (
       <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
       <div className="w-[clamp(60px,8vw,110px)] h-[clamp(60px,8vw,110px)] rounded-full border-2 border-accent flex items-center justify-center group-hover:scale-105 transition-transform">
         <svg width="80%" height="80%" viewBox="0 0 160 160" fill="none">
           <path d="M 65 48 L 115 80 L 65 112 Z" fill="#DDD4C1" stroke="#DDD4C1" stroke-linejoin="round" stroke-width="16" />
         </svg>
       </div>
     </div>
      )}
    </div>
  )
}
