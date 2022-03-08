import React from "react"
import ReactDOM from "react-dom"
import { Footer } from "./components/content/footer/main"
import ReactRoutes from "./reactRoutes"
import { config } from "./utils/main"
import { MainMenuBar } from "./components/topBar/index"

const COLORS = config.colors
const PAGES = config.pages

ReactDOM.render(
  <MainMenuBar
    pages={PAGES}
    fontColor={COLORS.white}
    barColor={COLORS.black}
    menuColor={COLORS.topMenuBackground}
  />,
  document.getElementById("topBar")
)

ReactDOM.render(
  <Footer/>,
  document.getElementById("footer")
)

ReactDOM.render(
  <ReactRoutes />,
  document.getElementById("app")
)
