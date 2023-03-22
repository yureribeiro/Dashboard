import React, { useEffect, useState, useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { DashboardContainer, FlexColumn } from "./style"
import { Header } from '../Login/style'
import History from "../../Components/history/index"
import Sidebar from '../../Components/sidebar/index'
import Categories from '../../Components/categories/index'
import Card from '../../Components/cards/index'
import LOGO from '../../images/LOGO.png'
import api from "../../api"
import { userContext } from "../../Utils/UserContext"


const Dashboard = () => {
  const navigate = useNavigate()
  const { user } = useContext(userContext)

  return (
    <>
      <Header>
        <img src={LOGO} />
        <p>Bem-vindo, {user.name}!</p>
      </Header>

      <Sidebar />

      <DashboardContainer>
        <FlexColumn>
          <Card />
          <History />
        </FlexColumn>

        <Categories />
      </DashboardContainer>
    </>
  )
}

export default Dashboard