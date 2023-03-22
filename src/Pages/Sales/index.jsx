import React, {useState} from "react"
import Sidebar from "../../Components/sidebar"
import { Header } from '../Login/style'
import { SalesForm, Container } from './style'
import LOGO from '../../images/LOGO.png'


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

      <Sidebar/>

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
