import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './styles/global'
import Routers from './Routes/routes'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Routers />
  </React.StrictMode>
)

