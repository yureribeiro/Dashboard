import React, { useState, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { userContext } from '../../Utils/UserContext';
import { Form, Input, SubmitButton } from '../categories/style'
import { Categories, TitleSales } from './style';
import api from '../../api';
import setDown from '../../images/setdown.svg'


const Sales = ({ categories }) => {
  const { register: registerSale, handleSubmit: handleSubmitSale, formState: { errors } } = useForm()
  const [selectedCategoryId, setSelectedCategoryId] = useState(null)
  const { user } = useContext(userContext)

  // registra uma venda
  const createSale = async (data, categoryId) => {
    try {
      await api.post(`sales/${user.id}/${categoryId}`, data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <TitleSales>
        <h5>Registrar venda
          <img src={setDown} />
        </h5>
      </TitleSales>
      <Form onSubmit={handleSubmitSale((data) => createSale(data, selectedCategoryId))}>
        <Categories>
          <select value={selectedCategoryId} onChange={(event) => setSelectedCategoryId(event.target.value)}>
            <option value="">Selecionar categoria</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </select>
        </Categories>


        <label htmlFor="quantity">Quantidade:</label>
        <Input
          placeholder="0"
          type="number"
          id="quantity"
          {...registerSale('quantity', { required: true })}
        />
        <label htmlFor="price">Preço:</label>
        <Input
          placeholder="00.00"
          type="text"
          id="price"
          {...registerSale('price', {
            required: true,
            pattern: {
              value: /\d+(\.\d{1,2})?/,
              message: "Por favor, insira um preço neste formato: 00.00"
            }
          })}
        />
        {errors.price && <p>{errors.price.message}</p>}
        <SubmitButton type="submit">Registrar</SubmitButton>
      </Form >
    </>
  )
}

export default Sales


  // // deleta uma categoria

  // const handleDeleteCategory = async (categoryId) => {
  //   try {
  //     const confirmed = window.confirm('Ao excluir uma categoria\n as vendas dessa categoria também serão excluidas!\n tem certeza?')
  //     if (confirmed) {
  //       await api.delete(`categories/${user.id}/${categoryId}`)
  //         .then(setCategories(prevCategories => prevCategories.filter(category => category.id !== categoryId)))
  //       setSelectedCategoryId(null)
  //     } else {
  //       console.log('excluir categoria cancelado')
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }