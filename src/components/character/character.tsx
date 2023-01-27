import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import type { Character } from '~/models/character';

export default component$(({ name, image, id }: Pick<Character, 'name' | 'image' | 'id'>) => {
  return (
    <div class='card'>
      <img src={image} alt={name} class='img-character' width='100%' height='100%' />
      <div>
        <div class='text-center'>
          <Link href={`details/${id}`}>{name}</Link>
        </div>
      </div>
    </div>
  );
});
