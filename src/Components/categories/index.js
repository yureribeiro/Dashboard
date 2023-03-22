import React, { useContext, useEffect, useState } from 'react'
import { CategoryContainer, Card } from './style'
import api from "../../api"
import { userContext } from "../../Utils/UserContext"
import camisaIcone from '../../images/camisa-icone.png'
import bermudaIcone from '../../images/bermuda-icone.png'
import boneIcone from '../../images/bone-icone.png'
import moletomIcone from '../../images/moletom-icone.png'
import sueterIcone from '../../images/sueter-icone.png'
import oculosIcone from '../../images/oculos-icone.png'

const Categories = () => {
  const { user } = useContext(userContext)


  return (
    <CategoryContainer>
      <Card >
        <img src={camisaIcone} />
      </Card>
      <Card >
        <img src={bermudaIcone} />
      </Card>
      <Card >
        <img src={boneIcone} />
      </Card>
      <Card >
        <img src={sueterIcone} />
      </Card>
      <Card >
        <img src={oculosIcone} />
      </Card>
      <Card >
        <img src={moletomIcone} />
      </Card>
    </CategoryContainer>
  )
}

export default Categories