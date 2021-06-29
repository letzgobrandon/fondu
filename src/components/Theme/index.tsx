import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { appStore } from "store/app.store"

const ThemeProvider: FC = ({ children }) => {
  let theme = appStore.dark ? "dark" : "light"

  const root = window.document.documentElement
  const isDark = appStore.dark

  root.classList.remove(isDark ? "light" : "dark")
  root.classList.value = theme

  return <div className={theme}>{children}</div>
}
export default observer(ThemeProvider)