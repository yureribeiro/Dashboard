import React, { useState } from 'react'
import { Container, Button } from './style'
import { NavLink } from "react-router-dom"
import CategoryIcon from '../../images/category.png'
import ChartIcon from '../../images/chart-pie-slice.png'
import ClockIcon from '../../images/clock-counter-clockwise.png'
import Lamp from '../../images/lamp.svg'
import Logout from '../logout'
import { lightTheme, darkTheme } from '../../styles/theme'
import { ThemeProvider } from 'styled-components'

const Sidebar = () => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <Container>
      <div>
        <NavLink to={'/dashboard'}> <img src={ChartIcon} /></NavLink>
      </div>
      <div>
        <NavLink to={'/dashboard'}><img src={CategoryIcon} /></NavLink>
      </div>
      <div>
        <NavLink to={'/dashboard'}> <img src={ClockIcon} /></NavLink>
      </div>

      <ThemeProvider theme={theme}>
        <Button onClick={toggleTheme}>
          <img src={Lamp} />
        </Button>
      </ThemeProvider>

      <Logout />
    </Container>
  )
}

export default Sidebar