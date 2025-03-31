import { SetStateAction } from 'jotai';
import { Dispatch, useEffect, useState } from 'react';

type Character = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_day: string;
  gender: string;
};

type useStarAPI = () => {
  setID: Dispatch<SetStateAction<number>>;
  character: Character | null;
};

export const useStarAPI: useStarAPI = () => {
  const [ID, setID] = useState(1);
  const [character, setcharacter] = useState<Character | null>(null);
  useEffect(() => {
    const fetchDate = async () => {
      const res = await fetch(`https://swapi.dev/api/people/${ID}`);
      console.log(res);
      const date = (await res.json()) as Character;
      setcharacter(date);
    };

    // voidはなんなんだ？
    fetchDate();
  }, [ID]);

  return {
    setID,
    character,
  };
};
