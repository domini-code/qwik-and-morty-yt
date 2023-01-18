import { component$, Resource, useResource$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { apiService } from '~/api/fetch-data';
import type { Character } from '~/models/character';

export default component$(() => {
  const location = useLocation();
  const id = location.params.id;

  const useResource = useResource$(() => apiService(id));

  return (
    <Resource
      value={useResource}
      onPending={() => <p>Loading character...</p>}
      onResolved={(character: Character) => {
        return (
          <>
            <div class='card-details'>
              <img src={character.image} alt={character.name} class='img-character' />
              <div class='justify-start'>
                <h5>{character.name}</h5>
                <p>
                  {character.status} - {character.gender}
                </p>
                <p>Specie: {character.species}</p>
              </div>
            </div>
          </>
        );
      }}
    />
  );
});
