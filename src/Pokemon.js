import React, { useEffect, useState } from 'react';
import './css/style.css';
import BG from './img/bg.png'

function Pokemon() {
    const [Pokemon, setPokemonRand] = useState(null);

    useEffect(() => {
            const Pokenumb = Math.floor(Math.random() * 1009)
            const APIurl = 'https://pokeapi.co/api/v2/pokemon/' + Pokenumb
            fetch(APIurl)
            .then( (res) => res.json())
            .then((data)=> {
                console.log(data);
                setPokemonRand(data);
            });
        }, []);
  
        return (
    <div>
        <br></br>
        {Pokemon && 
            <div className='twop'>
                <img className='nocol' src={BG}/>
                <div className='left'>
                    <div className='pname'><p>{Pokemon.species.name.charAt(0).toUpperCase() + Pokemon.species.name.slice(1)}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ID: {Pokemon.id}</p></div>
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    <img classname='pokeimg' src={Pokemon.sprites.front_default} title={Pokemon.species.name} width='200px' height='200px' />
                    
                </div>
                <div className='right'>
                    <h3>Abilities:</h3>
                    {ability(Pokemon)}
                    {types(Pokemon)}
                    <h3>Base Stats:</h3>
                    <div>
                        <p>HP: {Pokemon.stats[0].base_stat}</p>
                        <p>Attack: {Pokemon.stats[1].base_stat}</p>
                        <p>Defense: {Pokemon.stats[2].base_stat}</p>
                        <p>Sp. Atk: {Pokemon.stats[3].base_stat}</p>
                        <p>Sp. Def: {Pokemon.stats[4].base_stat}</p>
                        <p>Speed: {Pokemon.stats[5].base_stat}</p>
                        <p><b>Total: {Pokemon.stats[0].base_stat + Pokemon.stats[1].base_stat + Pokemon.stats[2].base_stat + Pokemon.stats[3].base_stat + Pokemon.stats[4].base_stat + Pokemon.stats[5].base_stat}</b></p>
                    </div>
                </div>
            </div>
        }
    </div>
  );
}

function ability(Pokemon){
    if(Pokemon.abilities.length == 3){
        return (
            <div>
                <p>Ability 1: {Pokemon.abilities[0].ability.name.charAt(0).toUpperCase() + Pokemon.abilities[0].ability.name.slice(1)}</p>
                <p>Ability 2: {Pokemon.abilities[1].ability.name.charAt(0).toUpperCase() + Pokemon.abilities[1].ability.name.slice(1)}</p>
                <p>Ability 3: {Pokemon.abilities[2].ability.name.charAt(0).toUpperCase() + Pokemon.abilities[2].ability.name.slice(1)}</p>
            </div>
        );
    } else if(Pokemon.abilities.length == 2){
        return(
            <div>
                <p>Ability 1: {Pokemon.abilities[0].ability.name.charAt(0).toUpperCase() + Pokemon.abilities[0].ability.name.slice(1)}</p>
                <p>Ability 2: {Pokemon.abilities[1].ability.name.charAt(0).toUpperCase() + Pokemon.abilities[1].ability.name.slice(1)}</p>
            </div>
        );
    } else{
        return(
            <div>
                <p>Ability 1: {Pokemon.abilities[0].ability.name.charAt(0).toUpperCase() + Pokemon.abilities[0].ability.name.slice(1)}</p>
            </div>
        );
    }
}

function types(Pokemon){
    if(Pokemon.types.length == 2){
        return(
            <div>
                <h3>Types: </h3>
                <p>{Pokemon.types[0].type.name.charAt(0).toUpperCase() + Pokemon.types[0].type.name.slice(1)}</p>
                <p>{Pokemon.types[1].type.name.charAt(0).toUpperCase() + Pokemon.types[1].type.name.slice(1)}</p>
            </div>
        );
    }
    else{
        return(
            <div>
                <h3>Type: </h3>
                <p>{Pokemon.types[0].type.name.charAt(0).toUpperCase() + Pokemon.types[0].type.name.slice(1)}</p>
            </div>
        );
    }
}

export default Pokemon