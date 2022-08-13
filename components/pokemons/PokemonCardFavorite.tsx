import React, { FC } from 'react'
import { Grid, Card } from '@nextui-org/react'
import { useRouter } from 'next/router'
interface Props
{
    pokemonId:number
}
const PokemonCardFavorite : FC<Props>= ({pokemonId}) => {
  const router = useRouter();
  const onClick= ()=>{
    router.push(`/pokemon/${pokemonId}`)
  }
  return (
    <Grid  xs={6} sm={2} md={3} xl={4}>
    <Card isHoverable isPressable css={{ padding: 10 }} onClick={onClick}>
        <Card.Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg` || '/no-image.png'}

            width="100%"
            height={140}
        />

    </Card>
</Grid>
  )
}

export default PokemonCardFavorite