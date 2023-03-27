import React, { useContext, useState, useEffect, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { CategoryContainer, Card, Form, Input, SubmitButton, CategoriesMap, Category, Delete } from './style'
import { userContext } from '../../Utils/UserContext'
import setDown from '../../images/setdown.svg'
import deleteImg from '../../images/delete.svg'
import api from '../../api'

const Categories = () => {
  const { user } = useContext(userContext)
  const { register: registerCategory, handleSubmit: handleSubmitCategory } = useForm()
  const { register: registerSale, handleSubmit: handleSubmitSale, formState: { errors } } = useForm()
  const [categories, setCategories] = useState([])
  const [selectedCategoryId, setSelectedCategoryId] = useState(null)

  // busca categorias já cadastradas
  const fetchCategories = async () => {
    const response = await api.get(`categories/${user.id}`)
    setCategories(response.data)
    console.log(response.data)
  }

  // renderiza categorias assim que o componente é montado
  useEffect(() => {
    fetchCategories()
  }, [])

  // cadastra uma categoria
  const onSubmitCategory = async (data, event) => {
    event.preventDefault();
    try {
      const response = await api.post(`categories/${user.id}`, data);
      setCategories(prevCategories => [...prevCategories, response.data]);
      console.log(response.data);
      fetchCategories();
    } catch (error) {
      console.log(error);
    }
  }

  // deleta uma categoria
  const handleDeleteCategory = async (categoryId) => {
    try {
      await api.delete(`categories/${user.id}/${categoryId}`);
      setCategories(prevCategories => prevCategories.filter(category => category.id !== categoryId));
      setSelectedCategoryId(null)
      fetchCategories();
    } catch (error) {
      console.error(error);
    }
  }

  // registra uma venda
  const createSale = async (data, categoryId) => {
    try {
      await api.post(`sales/${user.id}/${categoryId}`, data);
      console.log(data);
    } catch (error) {
      console.log(error);
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
          <SubmitButton type="submit">Salvar</SubmitButton>
        </Form>


        {/* REGISTRAR VENDA */}
        <Form onSubmit={handleSubmitSale((data) => createSale(data, selectedCategoryId))}>
          {/* CATEGORIAS */}
          <div>
            <h5>Categorias cadastradas
              <img src={setDown} />
            </h5>
          </div>
          <CategoriesMap>
            {categories.map((category) => (
              <Category key={category.id}>
                <input
                  type="checkbox"
                  id={`category-${category.id}`}
                  name={`category-${category.id}`}
                  value={category.id}
                  checked={selectedCategoryId === category.id}
                  onChange={() => setSelectedCategoryId(category.id)}
                />
                <label htmlFor={`category-${category.id}`}>{category.name}</label>
                <Delete onClick={() => handleDeleteCategory(category.id)}>
                  <img src={deleteImg} />
                </Delete>
              </Category>
            ))}
          </CategoriesMap>
          <strong>Registrar venda</strong>
          <label htmlFor="quantity">Quantidade:</label>
          <Input
            placeholder="ex: 2"
            type="number"
            id="quantity"
            {...registerSale('quantity', { required: true })}
          />
          <label htmlFor="price">Preço:</label>
          <Input
            placeholder="ex: 25.98"
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
          <SubmitButton type="submit">Salvar</SubmitButton>
        </Form>

      </Card>
    </CategoryContainer>
  )
}

export default Categories
