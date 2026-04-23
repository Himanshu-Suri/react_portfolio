import { useEffect, useRef, useState } from 'react'

const LINES = [
  'rf_signal_classifier/   real_time_chat/',
  '─── rf_signal_classifier ─────────────',
  '  PyTorch · CNN · SDR · FFT',
  '  4 signal classes · 80/20 split',
  '─── real_time_chat ───────────────────',
  '  MERN · Socket.io · JWT · Zustand',
  '  Real-time · Cloud Deployed',
]

export default function Terminal() {
  const [done, setDone] = useState([])
  const [current, setCurrent] = useState('')
  const [finished, setFinished] = useState(false)
  const li = useRef(0)
  const ci = useRef(0)

  useEffect(() => {
    function type() {
      if (li.current >= LINES.length) {
        setCurrent('')
        setFinished(true)
        return
      }
      const line = LINES[li.current]
      if (ci.current < line.length) {
        setCurrent(line.slice(0, ci.current + 1) + '▋')
        ci.current++
        setTimeout(type, 26)
      } else {
        setDone(prev => [...prev, line])
        setCurrent('')
        ci.current = 0
        li.current++
        setTimeout(type, 160)
      }
    }
    type()
  }, [])

  return (
    <div className="terminal-wrap">
      <div className="term-chrome">
        <span className="dot dot-r" /><span className="dot dot-y" /><span className="dot dot-g" />
        <span className="term-title">~/portfolio — zsh</span>
      </div>
      <div className="term-body">
        <p><span className="term-prompt">❯ </span><span className="term-out">ls ./projects</span></p>
        {done.map((line, i) => <p key={i} className="term-out">{line}</p>)}
        {current && <p className="term-out">{current}</p>}
        {finished && <p><span className="term-prompt">❯ </span><span className="cursor">▋</span></p>}
      </div>
    </div>
  )
}
