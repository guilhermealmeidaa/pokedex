import {
  Container,
  LeftContainer,
  PokeImage,
  PokeNumber,
  PokeType,
  PokeName,
  TypeImage,
} from "./styles";
import { redirect, Link } from "react-router-dom";

export default function PokemonCard(pokemon) {
  const pokeInfo = pokemon.pokemon.data;
  const pokeInfoName = pokeInfo.name;

  const pokeNameFormatter = () => {
    return pokeInfoName[0].toUpperCase() + pokeInfoName.substring(1);
  };

  const handleClick = () => {
    redirect("/PokemonPage");
  };

  // console.log(pokeInfo)
  return (
    <Link to={`PokemonPage/${pokeInfoName}`} style={{ textDecoration: 'none' }}>
      <Container>
        <LeftContainer>
          <PokeNumber>#{pokeInfo.order}</PokeNumber>
          <PokeName>{pokeNameFormatter()}</PokeName>
          <PokeType>
            {pokeInfo.types.map((type) => (
              <TypeImage
                src={require(`../../assets/types/${type.type.name}_icon.png`)}
              />
            ))}
          </PokeType>
        </LeftContainer>
        <PokeImage src={pokeInfo.sprites.other.home.front_default} />
      </Container>
    </Link>
  );
}
