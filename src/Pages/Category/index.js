import React, { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { Sidebar } from "../dashboard/style"
import { Container, CategoryContainer, Card } from "./style"
import { Header } from '../Login/style'
import LOGO from '../../images/LOGO.png'
import CategoryIcon from '../../images/category.png'
import ChartIcon from '../../images/chart-pie-slice.png'
import ClockIcon from '../../images/clock-counter-clockwise.png'
import camisaIcone from '../../images/camisa-icone.png'
import bermudaIcone from '../../images/bermuda-icone.png'
import boneIcone from '../../images/bone-icone.png'
import moletomIcone from '../../images/moletom-icone.png'
import sueterIcone from '../../images/sueter-icone.png'
import oculosIcone from '../../images/oculos-icone.png'


function Category() {
  const [CategoryItems, setCategoryItems] = useState([''])
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/sales')
  }


  return (
    <>
      <Header>
        <img src={LOGO} />
      </Header>

      <Sidebar>
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
          <NavLink to={'/home'}>Histórico</NavLink>
        </div>
      </Sidebar>

      <Container>
        <CategoryContainer>
          <Card onClick={handleClick} y>
            <img src={camisaIcone} />
            Camiseta
          </Card>
          <Card onClick={handleClick} y>
            <img src={bermudaIcone} />
            Bermuda
          </Card>
          <Card onClick={handleClick} y>
            <img src={boneIcone} />
            Boné
          </Card>
          <Card onClick={handleClick} y>
            <img src={sueterIcone} />
            Sueters
          </Card>
          <Card onClick={handleClick} y>
            <img src={oculosIcone} />
            Acessórios
          </Card>
          <Card onClick={handleClick} y>
            <img src={moletomIcone} />
            Blusão
          </Card>
        </CategoryContainer>
      </Container>

    </>
  )
}

export default Category
