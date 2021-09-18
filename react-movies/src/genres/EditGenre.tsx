import { useParams } from 'react-router-dom';
import GenreForm from './GenreForm';
import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { urlGenres } from '../endpoints';
import {  genreCreationDTO } from './genres.model';
import Loading from '../utils/Loading';
import DisplayErrors from '../utils/DisplayErrors';
export default function EditGenre() {
  const { id }: any = useParams();
  const [genre, setGenre] = useState<genreCreationDTO>();
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    axios
      .get(`${urlGenres}/${id}`)
      .then((response: AxiosResponse<genreCreationDTO>) => {
        setGenre(response.data);
      });
  }, []);

  async function edit(genreToEdit: genreCreationDTO ) {
       try {
        await axios.put(`${urlGenres}/${id}`, genreToEdit);
    }
    catch (error) {
            if (error && error.response) {
                setErrors(error.response.data)
            }
    }
       }
  return (
    <>
      <h3>Edit Genre</h3>
      <DisplayErrors errors={errors} />
      {genre ? <GenreForm
   
        model={genre}
        onSubmit={async (value) => {
          // when the form is posted
          await new Promise((r) => setTimeout(r, 1));
          console.log(id);
          console.log(value);
        }}
      /> : <Loading />}
    </>
  );
}

function AxiosResponse(response: any, AxiosResponse: any) {
  throw new Error('Function not implemented.');
}
