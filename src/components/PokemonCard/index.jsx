import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function PokemonCard(pokemon) {
  const pokeInfo = pokemon.pokemon.data;
  const pokeName = pokeInfo.name;

  const pokeNameFormatter = () => {
    return pokeName[0].toUpperCase() + pokeName.substring(1);
  }

  // console.log(pokemon)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={pokeInfo.sprites.front_default}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pokeNameFormatter()}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Card>
  );
}