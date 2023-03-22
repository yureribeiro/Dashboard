import React, { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { Container, CategoryContainer, Card } from "./style"
import { Header } from '../Login/style'
import LOGO from '../../images/LOGO.png'
import Sidebar from "../../Components/sidebar"
import Categories from "../../Components/categories"


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

      <Sidebar />

      <Container>
        <Categories />
      </Container>

    </>
  )
}

export default Category
