import React, { useEffect, useState } from "react";
import NavbarPoke from "../../components/NavbarPoke";
import { useParams } from "react-router-dom";

import {
  Container,
  ContainerInfo,
  DescriptionLower,
  DescriptionTitle,
  Lower,
  PokeDescription,
  PokeBackground,
  UpperInfo,
  LowerCollumn,
  DescriptionText,
  TypeImage,
  TypeContainer,
} from "./styles";
import axios from "axios";

export const PokemonPage = () => {
  const [pokemons, setPokemon] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => setPokemon(res.data))
      .catch((err) => console.log(err));
  };

  const pokeNameFormatter = (name) => {
    return name[0].toUpperCase() + name.substring(1);
  };

  const name = pokemons.name || "Julio";
  console.log(pokemons);

  return (
    <Container>
      <NavbarPoke name={name} />
      <ContainerInfo>
        <UpperInfo>
          <PokeBackground>
            <TypeContainer>
              {pokemons.types.map((type) => (
                <TypeImage
                  src={require(`../../assets/types/${type.type.name}_icon.png`)}
                />
              ))}
            </TypeContainer>
            <img
              style={{ height: "200px" }}
              src={pokemons.sprites.other.home.front_default}
            />
          </PokeBackground>
          <PokeDescription>
            <DescriptionTitle style={{ color: "white", fontSize: "20px" }}>
              Info
            </DescriptionTitle>
            <DescriptionLower>
              <Lower>
                <LowerCollumn>
                  <DescriptionText>
                    Altura: {pokemons.height / 10} m{" "}
                  </DescriptionText>
                </LowerCollumn>
                <LowerCollumn>
                  <DescriptionText>
                    Tipo: {pokeNameFormatter(pokemons.types[0].type.name)}
                  </DescriptionText>
                </LowerCollumn>
              </Lower>
              <Lower>
                <LowerCollumn>
                  <DescriptionText>
                    Peso: {pokemons.weight / 10} kg
                  </DescriptionText>
                </LowerCollumn>
                <LowerCollumn>
                  <DescriptionText>
                    Habilidade:{" "}
                    {pokeNameFormatter(pokemons.abilities[0].ability.name)}
                  </DescriptionText>
                </LowerCollumn>
              </Lower>
            </DescriptionLower>
          </PokeDescription>
        </UpperInfo>
      </ContainerInfo>
    </Container>
  );
};
