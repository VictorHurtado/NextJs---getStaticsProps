
import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { Layout } from '../../components/layouts'
import FavoritesPokemon from '../../components/pokemons/FavoritesPokemon'
import NoFavorites from '../../components/ui/noFavorites'
import { StoragePokemons } from '../../utils/localFavorites'

const Favorites: NextPage = () => {
    const [favoritePokemons, setfavoritePokemons] = useState<number[]>([])
    useEffect(() => {
        setfavoritePokemons(StoragePokemons())
    }, [])

    return (
        <Layout title='Favoritos'>
            {favoritePokemons.length == 0 ? <NoFavorites /> :
                (
                    <FavoritesPokemon favoritePokemons={favoritePokemons}/>
                )
            }

        </Layout>
    )
}
export default Favorites