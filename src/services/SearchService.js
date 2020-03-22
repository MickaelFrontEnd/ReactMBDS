import WASABI_FULLTEXT_SEARCH, { WASABI_ARTIST_SEARCH } from '../cofig/Url';

export const searchByFullText = (terms) => {
    return fetch(`${WASABI_FULLTEXT_SEARCH}/${terms}`)
    .then((result) => result.json())
    .catch((err) => console.log(err));
}

export const searchByArtist = (artist) => {
    return fetch(`${WASABI_ARTIST_SEARCH}/${artist}`)
    .then((result) => result.json())
    .catch((err) => console.log(err));
}

export default searchByFullText;