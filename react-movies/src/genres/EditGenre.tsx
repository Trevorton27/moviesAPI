import { urlGenres } from '../endpoints';
import EditEntity from '../utils/EditEntity';
import GenreForm from './GenreForm';
import { genreCreationDTO, genreDTO } from './genres.model';

export default function EditGenre() {
  return (
    <>
      <EditEntity<genreCreationDTO, genreDTO>
        url={urlGenres}
        entityName='Genres'
        indexURL='/genres'
      >
        {(entity, edit) => (
          <GenreForm
            model={entity}
            onSubmit={async (value) => {
              await edit(value);
            }}
          />
        )}
      </EditEntity>
    </>
  );
}

// function AxiosResponse(response: any, AxiosResponse: any) {
//   throw new Error('Function not implemented.');
// }
