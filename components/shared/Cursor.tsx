'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onMove = (e: MouseEvent) => {
      el.style.left = `${e.clientX - 6}px`
      el.style.top  = `${e.clientY - 6}px`
    }
    const addHover = () => el.classList.add('cursor--hover')
    const rmHover  = () => el.classList.remove('cursor--hover')
    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button, [data-hover]').forEach((node) => {
      node.addEventListener('mouseenter', addHover)
      node.addEventListener('mouseleave', rmHover)
    })
    return () => document.removeEventListener('mousemove', onMove)
  }, [])

  return <div ref={ref} className="cursor" aria-hidden />
}
