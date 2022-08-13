import React, { FC } from 'react'
import { Container, Text, Image, Grid, Card } from '@nextui-org/react'
import PokemonCardFavorite from './PokemonCardFavorite'
interface Props{
    favoritePokemons: number[]
}
const FavoritesPokemon:FC<Props> = ( {favoritePokemons}) => {
    return (
        <Grid.Container gap={2} direction={"row"} justify='flex-start'>
            {
                favoritePokemons.map(id => (
                   <PokemonCardFavorite key={id} pokemonId={id}/>
                ))
            }
        </Grid.Container>
    )
}

export default FavoritesPokemon