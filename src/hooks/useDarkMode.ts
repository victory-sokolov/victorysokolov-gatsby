import { useEffect, useState } from "react"

export const useDarkMode = () => {
  const initTheme =
    typeof window !== "undefined"
      ? document.documentElement.dataset.theme
      : "light"
  const [theme, setTheme] = useState(initTheme)

  const setMode = (mode: string) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme", mode)
      document.documentElement.dataset.theme = mode
      setTheme(mode)
    }
  }

  const toggleTheme = () => {
    theme === "light" ? setMode("dark") : setMode("light")
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const supportDarkMode =
        window.matchMedia("(prefers-color-scheme: dark)").matches === true
      const localTheme = window.localStorage.getItem("theme")

      if (!localTheme && supportDarkMode) {
        document.body.classList.add("theme-dark")
        return
      }

      localTheme && setTheme(localTheme)
    }
  }, [])

  return [theme, toggleTheme]
}
