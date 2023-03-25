import React, { useContext, useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { CategoryContainer, Card, Form, Input, SubmitButton } from './style'
import { userContext } from '../../Utils/UserContext'
import api from '../../api'

const Categories = () => {
  const { user } = useContext(userContext)
  const { register, handleSubmit, reset } = useForm()
  // const { category, setCategory } = useState([])

  const onSubmit = async (data) => {
    try {
      const response = await api.post(`categories/${user.id}`, data)
      console.log(response)
      reset()
    } catch (error) {
      console.log(error)
    }
  }

  // const getCategories = async () => {
  //   try {
  //     const categories = await api.get(`/categories/${user.id}`)
  //     setCategory(categories)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  // useEffect(() => {
  //     getCategories()
  // }, []);



  return (
    <CategoryContainer>
      <Card>
        <h2>Adicionar categoria</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Nome:</label>
          <Input
            placeholder="Ex: camiseta"
            type="text"
            id="name"
            {...register('name', { required: true })}
          />
          <SubmitButton type="submit">Salvar</SubmitButton>
        </Form>
        {/* <div>
          {category.map((category) => (
            <div key={category.id}>
              <p>{category.name}</p>
            </div>
          ))}
        </div> */}

      </Card>
    </CategoryContainer>
  )
}

export default Categories