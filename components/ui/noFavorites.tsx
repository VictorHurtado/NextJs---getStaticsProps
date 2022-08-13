import React from 'react'
import { Container,Text, Image } from '@nextui-org/react'
const NoFavorites = () => {
  return (
    <Container css={{
        display:'flex',
        flexDirection:'column',
        height:'calc(100vh - 100px)',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center'
      }}>
        <Text h1> No hay nada en favoritos  </Text>
        <Image src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"} alt="icono de la api" width={250} height={250} css={{opacity:'0.1', width:'250px'}}></Image>
        
      </Container>
  )
}

export default NoFavorites