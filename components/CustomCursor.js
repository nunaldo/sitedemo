'use client'

import { useEffect } from 'react'

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.createElement('div')
    cursor.className = 'custom-cursor'
    cursor.innerHTML = '<div class="cursor-inner"></div>'
    document.body.appendChild(cursor)

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
    }

    const activateCursor = () => cursor.classList.add('active')
    const deactivateCursor = () => cursor.classList.remove('active')

    document.addEventListener('mousemove', moveCursor)
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', activateCursor)
      el.addEventListener('mouseleave', deactivateCursor)
    })

    return () => {
      document.removeEventListener('mousemove', moveCursor)
      cursor.remove()
    }
  }, [])

  return null
}
