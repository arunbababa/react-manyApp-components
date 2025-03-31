import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import usePokemon from '@/hooks/usePokemon';

const Page: NextPage = () => {
  const { query, error, pokemon, onChangeQuery, fetchPokemon } = usePokemon();

  return (
    <>
      <div className="boredr mx-auto mt-8 max-w-4xl">
        <div className="flex justify-center">
          <div className="">
            {/* 入力フォーム */}
            <div>
              <input
                onChange={onChangeQuery}
                className="rounded-md border px-3 py-2 outline-none"
                type="text"
                value={query}
                placeholder="ポケモンの名前を入力"
              />
              {error && <p className="mt-2 text-red-500">{error}</p>}
            </div>

            {/* ポケモンの情報 */}
            {pokemon && (
              <div className="mt-4 text-center text-base">
                <h3>{pokemon.name}</h3>
                <div className="flex justify-center">
                  <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>
                <p>タイプ:{pokemon.types.map((pokemonType) => pokemonType.type.name).join('')}</p>
                <p>重さ:{pokemon.wight}</p>
                <p>身長:{pokemon.height}</p>
              </div>
            )}
            {/* 検索ボタン */}
            <Button onClick={fetchPokemon} variant="primary" label="検索" className="text-center" />
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Page;
