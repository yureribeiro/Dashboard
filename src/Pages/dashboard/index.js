import React, { useState, useContext } from "react"
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
import api from "../../api"
// import userContext from "../../Utils/context"

const Dashboard = () => {
  const [balance, setBalance] = useState(0)
  const navigate = useNavigate()


  //
  const getBalance = async () => {
    try {
      const sales = await api.get(`sales/1/1`)

      let totalSales = 0

      sales.data.forEach((sale) => {
        totalSales += parseFloat(sale.price.replace(",", ".")) // convertendo o preço para um número
      })
      setBalance(totalSales)
    } catch (error) {
      console.error(error)
    }
  }


  // const { user } = useContext(userContext)
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
            <p>Total vendas</p>
            <p>R$ {balance}</p>
            <button onClick={getBalance}></button>
          </BalanceCards>

          <Histórico>
            <div>Historico aqui!</div>
          </Histórico>
        </FlexColumn>

        <CategoryContainer>
          <Card >
            <img src={camisaIcone} />
          </Card>
          <Card >
            <img src={bermudaIcone} />
          </Card>
          <Card >
            <img src={boneIcone} />
          </Card>
          <Card >
            <img src={sueterIcone} />
          </Card>
          <Card >
            <img src={oculosIcone} />
          </Card>
          <Card >
            <img src={moletomIcone} />
          </Card>
        </CategoryContainer>
      </DashboardContainer>
    </>
  )
}

export default Dashboard