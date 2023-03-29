import React from "react"
import History from "../../Components/history/index"
import Sidebar from '../../Components/sidebar/index'
import Categories from '../../Components/categories/index'
import Card from '../../Components/cards/index'
import { DashboardContainer, FlexColumn } from "./style"
import Header from '../../Components/header/index'

const Dashboard = () => {
  return (
    <>
      <Header />

      <DashboardContainer>
        <Sidebar />

        <Categories />

        <FlexColumn>
          <Card />
          <History />
        </FlexColumn>
      </DashboardContainer>
    </>
  )
}

export default Dashboard