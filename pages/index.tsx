import React from 'react'
import type { NextPage, GetStaticProps } from 'next'
import { Grid } from '@nextui-org/react'

import { PokemonListResponse, SmallPokemon } from '../interfaces'
import { Layout } from '../components/layouts/index'
import { pokeApi } from '../api'
import { PokemonCard} from '../components/pokemons'
interface Props {
  pokemons: SmallPokemon[]
}

const Home: NextPage<Props> = ({ pokemons }) => {

  return (

    <Layout title='Pokemon app from layout prop'>
      <Grid.Container gap={2} justify="flex-start">

        {pokemons.map((pokemon) => 
          <PokemonCard key={pokemon.id} pokemon={pokemon}></PokemonCard>

        )}

      </Grid.Container>
    </Layout>

  )
}



export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  const imageSource = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"
  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => { return { ...pokemon, image: (imageSource + (index + 1).toString() + ".svg"), id: index + 1 } })

  return {
    props: {
      pokemons: pokemons
    }
  }
}
export default Home
