import React, { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { Histórico, FlexColumn, DashboardContainer, Sidebar, CategoryContainer, Card, BalanceCards } from "./style"
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



const Dashboard = () => {
  const [balance, setBalance] = useState('')
 
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
          <NavLink to={'/dashboard'}>Histórico</NavLink>
        </div>
      </Sidebar>

      <DashboardContainer>
        <FlexColumn>
          <BalanceCards>
            <p>Total Mês</p>
            <p> R$: 00,00</p>
          </BalanceCards>
          <BalanceCards>
            <p>Total Semana</p>
            <p> R$: 00,00</p>
          </BalanceCards>

          <Histórico>
            <table>
              <tr>
                <th>Categoria</th>
                <th>Quantidade</th>
                <th>Preço</th>
              </tr>
              <tr>
                <td>Camiseta</td>
                <td>3</td>
                <td>R$ 54.00</td>
              </tr>
              <tr>
                <td>Boné</td>
                <td>2</td>
                <td>R$ 24.00</td>
              </tr>
              <tr>
                <td>Moletom</td>
                <td>5</td>
                <td>R$ 224.00</td>
              </tr>
              <tr>
                <td>Camiseta</td>
                <td>5</td>
                <td>R$ 70.00</td>
              </tr>
            </table>
          </Histórico>
        </FlexColumn>

        <CategoryContainer>
          <Card onClick={handleClick}>
            <img src={camisaIcone} />
          </Card>
          <Card onClick={handleClick}>
            <img src={bermudaIcone} />
          </Card>
          <Card onClick={handleClick}>
            <img src={boneIcone} />
          </Card>
          <Card onClick={handleClick}>
            <img src={sueterIcone} />
          </Card>
          <Card onClick={handleClick}>
            <img src={oculosIcone} />
          </Card>
          <Card onClick={handleClick}>
            <img src={moletomIcone} />
          </Card>
        </CategoryContainer>
      </DashboardContainer>
    </>
  )
}

export default Dashboard