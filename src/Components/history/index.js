import React, { useContext, useEffect, useState } from 'react'
import { Container } from './style'
import api from "../../api"
import { userContext } from "../../Utils/UserContext"


const History = () => {
  const [history, setHistory] = useState([])
  const { user } = useContext(userContext)

  const getHistory = async () => {
    try {
      const sales = await api.get(`sales/${user.id}/1/total`)
      setHistory(sales.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getHistory()
  }, [])

  return (
    <Container>
      {history.map((sale) => (
        <div key={sale.id}>
          <p>{sale.id}</p>
          <p>Quantidade: {sale.quantity}</p>
          <p>Preço: {sale.price}</p>
          <p>ID da categoria: {sale.categoryId}</p>
          <p>ID do usuário: {sale.userId}</p>
        </div>
      ))}
    </Container>
  )
}

export default History
