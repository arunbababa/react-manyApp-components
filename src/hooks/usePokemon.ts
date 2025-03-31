import { ChangeEvent, useState } from 'react';

type Pokemon = {
  sprites: PokemonSprits;
  name: string;
  types: PokemonType[];
  height: number;
  wight: number;
};

type PokemonSprits = {
  front_default: string;
};

type PokemonType = {
  type: {
    name: string;
  };
};

type usePokemon = () => {
  query: string;
  error: string | null;
  pokemon: string;
  onChangeQuery: () => void;
  fetchPokemon: () => void;
};

const usePokemon = () => {
  const [query, setquery] = useState('');
  const [error, setError] = useState<string | null>('');
  const [pokemon, setPokemon] = useState<Pokemon>('');

  const onChangeQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setquery(e.target.value);
  };
  const fetchPokemon = async () => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
      const date = (await res.json()) as Pokemon;
      setPokemon(date);
      setError(null);
    } catch (error) {
      setError('ポケモンが見つかりませんでした。');
    }
  };

  return {
    query,
    error,
    pokemon,
    onChangeQuery,
    fetchPokemon,
  };
};

export default usePokemon;
