import React, { useContext, useEffect, useState } from 'react'
import { Container, Delete } from './style'
import api from "../../api"
import { userContext } from "../../Utils/UserContext"
import deleteImg from '../../images/delete.svg'

const History = () => {
  const [history, setHistory] = useState([])
  const { user } = useContext(userContext)

  const getHistory = async () => {
    try {
      const sales = await api.get(`sales/${user.id}/1/total`)
      setHistory(sales.data)
      console.log(sales.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getHistory()
  }, [])

  const handleDelete = async () => {
    try {
      const deleteSale = await api.delete(`sales/${user.id}`)
      setHistory(deleteSale.data)
      console.log(deleteSale.data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Container>
      {history.length === 0 ? (
        <p>Histórico de registros vazio</p>
      ) : (
        history.map((sale) => (
          <div key={sale.id}>
            <p>{sale.id}</p>
            <p>Quantidade: {sale.quantity}</p>
            <p>Preço: {sale.price}</p>
            <p>Categoria: {sale.categoryName}</p>
            <Delete onClick={handleDelete}>
              <img src={deleteImg} />
            </Delete>
          </div>
        ))
      )}
    </Container>
  )
}

export default History
