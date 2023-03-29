import React, { useContext, useState, useEffect } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import api from '../../api'
import { userContext } from '../../Utils/UserContext'

const ChartSales = () => {
  const [monthlySales, setMonthlySales] = useState([])
  const [xDomain, setXDomain] = useState()
  const { user } = useContext(userContext)

  useEffect(() => {
    const fetchSales = async () => {
      try {
        const sales = await api.get(`sales/${user.id}/0/total`)

        // Obtenha a data da primeira venda
        const startDate = new Date(sales.data.reduce((minDate, sale) => {
          const saleDate = new Date(sale.createdAt).getTime()
          return saleDate < minDate ? saleDate : minDate
        }, Date.now()))

        // Obtenha a data atual
        const endDate = Date.now()

        const months = Array.from({ length: 12 }, (_, i) => i + 1)
        const monthlySales = months.map((month) => {
          const monthlyTotal = sales.data
            .filter((sale) => new Date(sale.createdAt).getMonth() === month - 1)
            .reduce((acc, sale) => acc + parseFloat(sale.price.replace(",", ".")), 0)
          return { totalSales: month, total: monthlyTotal }
        })
        console.log(startDate)
        setMonthlySales(monthlySales)
        setXDomain([startDate, endDate]) // Defina o valor de domain para o eixo X
      } catch (error) {
        console.error(error)
      }
    }

    fetchSales()
  }, [])

  return (
    <ResponsiveContainer>
      <AreaChart data={monthlySales}>
        <CartesianGrid strokeDasharray="2 2" />
        <XAxis dataKey="totalSales" domain={xDomain} />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="total" stroke="#d3d3d3" fill="#FFD369" />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default ChartSales