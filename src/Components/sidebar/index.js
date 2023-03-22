import React from 'react'
import { Container } from './style'
import { NavLink } from "react-router-dom"
import CategoryIcon from '../../images/category.png'
import ChartIcon from '../../images/chart-pie-slice.png'
import ClockIcon from '../../images/clock-counter-clockwise.png'

const Sidebar = () => {
  return (
    <Container>
      <div>
        <img src={ChartIcon} />
        <NavLink to={'/dashboard'}>Dashboard</NavLink>
      </div>
      <div>
        <img src={CategoryIcon} />
        <NavLink to={'/category'}>Categorias</NavLink>
      </div>
      <div>
        <img src={ClockIcon} />
        <NavLink to={'/dashboard'}>Histórico</NavLink>
      </div>
    </Container>
  )
}

export default Sidebar