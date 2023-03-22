import React, { useContext, useEffect, useState } from 'react'
import { Container, BalanceCards } from './style'
import api from "../../api"
import { userContext } from "../../Utils/UserContext"


const Card = () => {
  const [balance, setBalance] = useState(0)
  const { user } = useContext(userContext)

  const getBalance = async () => {
    try {
      const sales = await api.get(`sales/${user.id}/1/total`)
      const totalSales = sales.data.reduce((acc, sale) => acc + parseFloat(sale.price.replace(",", ".")), 0) // somando o valor de price de cada venda
      setBalance(totalSales.toFixed(2)) // arredondando o resultado para duas casas decimais
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getBalance()
  }, [])

  return (
    <>
      <Container>
        <BalanceCards>
          <p>Total acumulado:</p>
          <p>R$ {balance}</p>
          <button onClick={getBalance}>atualizar</button>
        </BalanceCards>

        <BalanceCards>
          <p>Total acumulado:</p>
          <p>R$ {balance}</p>
          <button onClick={getBalance}>atualizar</button>
        </BalanceCards>
      </Container>
    </>
  )
}

export default Card