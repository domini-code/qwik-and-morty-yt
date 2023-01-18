import { component$, Resource, useResource$ } from '@builder.io/qwik';
import { apiService } from '~/api/fetch-data';
import type { Character } from '~/models/character';
import CharacterComponent from '../components/character/character';

export default component$(() => {
  const useResource = useResource$(() => apiService());

  return (
    <Resource
      value={useResource}
      onPending={() => <p>Loading..... </p>}
      onResolved={({ results }) => {
        return (
          <>
            <ul class='grid-container'>
              {results.map((character: Character) => {
                return (
                  <li key={character.id}>
                    <CharacterComponent {...character} />
                  </li>
                );
              })}
            </ul>
          </>
        );
      }}
    />
  );
});
