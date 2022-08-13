
const toggleFavorite=(id:number)=>{
    console.log("Toggle Favorite")
    let favorites:number[] = JSON.parse(localStorage.getItem('favorites')|| '[]')
    if(favorites.includes(id)){
        favorites=favorites.filter(pokeId=> pokeId!==id);
    }else{
        favorites.push(id)
    }
    localStorage.setItem('favorites',JSON.stringify(favorites))

}

const existInFavorites=(id:number)=>{
    if(typeof window ==='undefined')return false
    const favorites:number[] = JSON.parse(localStorage.getItem('favorites')|| '[]')
    return favorites.includes(id)
}

const pokemons = ():number[] =>{
    return JSON.parse(localStorage.getItem('favorites')|| '[]')
}
export {toggleFavorite, existInFavorites, pokemons as StoragePokemons} 
