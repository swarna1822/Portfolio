import { useEffect, useState } from 'react'

export function useTypewriter(text, { speed = 55, startDelay = 400 } = {}) {
  const [output, setOutput] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    setOutput('')
    setDone(false)
    let i = 0
    let intervalId

    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        i += 1
        setOutput(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(intervalId)
          setDone(true)
        }
      }, speed)
    }, startDelay)

    return () => {
      clearTimeout(timeoutId)
      clearInterval(intervalId)
    }
  }, [text, speed, startDelay])

  return { output, done }
}
