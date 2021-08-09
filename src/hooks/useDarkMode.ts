import { useEffect, useState } from "react"

export const useDarkMode = () => {
  const [theme, setTheme] = useState("light")

  const setMode = (mode: string) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme", mode)
      setTheme(mode)
    }
  }

  const toggleTheme = () => {
    theme === "light" ? setMode("dark") : setMode("light")
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const localTheme = window.localStorage.getItem("theme")
      localTheme && setTheme(localTheme)
    }
  }, [])

  return [theme, toggleTheme]
}
