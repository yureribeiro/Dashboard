import React, { useContext, useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { CategoryContainer, Card, Form, Input, SubmitButton } from './style'
import { userContext } from '../../Utils/UserContext'
import api from '../../api'
import Sales from '../sales/index'


const Categories = () => {
  const { register: registerCategory, handleSubmit: handleSubmitCategory } = useForm()
  const [selectedCategoryId, setSelectedCategoryId] = useState(null)
  const { user } = useContext(userContext)
  const [categories, setCategories] = useState([])

  // renderiza categorias assim que o componente é montado
  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`categories/${user.id}`)
      if (response.data !== ['']) {
        setCategories(response.data)
      }
    }
    fetchData()
  }, [])

  // cadastra uma categoria
  const onSubmitCategory = async (data) => {
    try {
      const response = await api.post(`categories/${user.id}`, data)
        .then(() => setCategories(prevCategories => [...prevCategories, response.data]))
      alert(`${response.data} cadastrada com sucesso!`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <CategoryContainer>
      <Card>
        {/* REGISTRAR CATEGORIA */}
        <Form onSubmit={handleSubmitCategory(onSubmitCategory)}>
          <h4>Adicionar categoria</h4>
          <label htmlFor="name">Nome:</label>
          <Input
            placeholder="Ex: camiseta"
            type="text"
            id="name"
            {...registerCategory('name', { required: true })}
          />
          <SubmitButton type="submit">Cadastrar</SubmitButton>
        </Form>

        {/* REGISTRAR VENDA */}
        <Sales categories={categories} setSelectedCategoryId={setSelectedCategoryId} />
      </Card>
    </CategoryContainer>
  )
}

export default Categories
