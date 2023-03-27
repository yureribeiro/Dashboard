import React from 'react'
import { Container } from './style'
import { NavLink } from "react-router-dom"
import ChartIcon from '../../images/chart.svg'
import Drive from '../../images/drive.svg'
import Logout from '../logout'

const Sidebar = () => {
  return (
    <Container>
      <div>
        <NavLink to={'/dashboard'}> <img src={ChartIcon} /></NavLink>
      </div>
      <div>
        <NavLink to={'/dashboard'}> <img src={Drive} /></NavLink>
      </div>
      <Logout />
    </Container>
  )
}

export default Sidebar