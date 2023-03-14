import React, {useState} from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { Sidebar } from "../dashboard/style"
import { Header } from '../Login/style'
import { SalesForm, Container } from './style'
import LOGO from '../../images/LOGO.png'
import CategoryIcon from '../../images/category.png'
import ChartIcon from '../../images/chart-pie-slice.png'
import ClockIcon from '../../images/clock-counter-clockwise.png'

const Sales = () => {
  const [form, setForm] = useState([])
  const [quantidade, setQuantidade] = useState(0)
  const [amount, setAmount] = useState(0)
  // const navigate = useNavigate()

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "quantidade") {
      setQuantidade(parseInt(value));
    } else if (name === "amount") {
      setAmount(parseFloat(value));
    }
  };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const sell = {
        quantidade,
        amount,
      };
      setForm([...form, sell]);
      console.log(sell);
      setQuantidade(0);
      setAmount(0);
    };
    

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

      <Container>
        <SalesForm>
          <form action="">
            <label>Quantidade:</label>
            <input 
            name="quantidade"
            type="number" 
            placeholder="2" 
            onChange={handleChange}
            />
            <label>Preço:</label>
            <input 
            name="amount"
            type="number" 
            placeholder="50.00" 
            onChange={handleChange}
            />
            <button onClick={handleSubmit}>Registrar</button>
          </form>
        </SalesForm>
      </Container>

    </>
  )
}

export default Sales
