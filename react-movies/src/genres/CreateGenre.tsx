import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { urlGenres } from '../endpoints';
import GenreForm from './GenreForm';
import { genreCreationDTO } from './genres.model';
import DisplayErrors from '../utils/DisplayErrors';

export default function CreateGenre() {
    const history = useHistory();

    async function create(genre: genreCreationDTO){
    
            await axios.post(urlGenres, genre);
            console.log('genre: ', genre)
            history.push('/genres');
      
    }

    return (
        <>
            <h3>Create Genre</h3>
    
            <GenreForm model={{ name: '' }}
                onSubmit={async value => {
                   await create(value);
                }}
            />
        </>
    )
}