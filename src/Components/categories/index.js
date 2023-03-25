import React, { useContext, useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { CategoryContainer, Card, Form, Input, SubmitButton } from './style'
import { userContext } from '../../Utils/UserContext'
import setDown from '../../images/setdown.svg'
import api from '../../api'

const Categories = () => {
  const { user } = useContext(userContext)
  const { register, handleSubmit, reset } = useForm()
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await api.get(`categories/${user.id}`)
      setCategories(response.data)
    }
    fetchCategories()
  }, [user.id])

  const onSubmit = async (data, event) => {
    event.preventDefault()
    try {
      const response = await api.post(`categories/${user.id}`, data)
      console.log(response)
      setCategories([...categories, response.data])
      reset()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <CategoryContainer>
      <Card>
        <h3>Adicionar categoria</h3>
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


        <h5>Categorias cadastradas <img src={setDown} /></h5>
        <div>
          {categories.map((category) => (
            <div key={category.id}>
              <input
                type="checkbox"
                id={`category-${category.id}`}
                name={`category-${category.id}`}
                value={category.id}
              />
              <label htmlFor={`category-${category.id}`}>{category.name}</label>
            </div>
          ))}
        </div>
      </Card>
    </CategoryContainer>
  )
}

export default Categories


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