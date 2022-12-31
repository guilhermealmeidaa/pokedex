import { Container, Grid } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";
import PokemonCard from "../components/PokemonCard";

export const Home = () => {
    const [pokemons, setPokemons] = useState<any[]>([]);

    useEffect(() => {
        getPokemons();
    }, []);

    const getPokemons = () => {
        var endpoints:any[] = [];
            for(var i = 1; i < 500; i++){
                endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
            }
            axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
            .then((res) => setPokemons(res));
       
    };
    
    const pokemonFilter = (name: string) => {
        var filteredPokemons = [];
        if(name === "") getPokemons();
        for (let i in pokemons) {
            if(pokemons[i].data.name.includes(name)) {
                filteredPokemons.push(pokemons[i])
            };
        };
        setPokemons(filteredPokemons);
    }
    
    return(
    <div style={{backgroundColor:"#1E1E1E"}}>
        <Navbar pokemonFilter={pokemonFilter}/>
        <Container maxWidth={false}>
            <Grid container spacing={2}>
                {pokemons.map((pokemon, key) =>
                    <Grid item xs={3} key={key}>
                            <PokemonCard pokemon={pokemon}/>
                        
                    </Grid>
                )}
                
            </Grid>
        </Container>
        
    </div>
    );
}