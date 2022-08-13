import { FC } from "react"

import Head from "next/head"
import { Navbar } from "../ui"

interface Props{
    children: JSX.Element[]|JSX.Element,
    title?: string
}
export const Layout: FC<Props> = ({ children,title }) => (
    <>
        <Head>
            <title> {title ||'Pokedex App'}</title>
            <meta name="author" content="Victor Hurtado"/>
            <meta name="description" content="Is a pokedex for someone pokemons"/>
            <meta name="keywords" content={`${title},"pokemon", "pokedex"`}/>
        </Head>
        <Navbar/>
        <main style={{
            padding: '0px 20px'
        }}>
            {children}
        </main>
    </>
)
