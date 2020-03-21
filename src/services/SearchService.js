import WASABI_FULLTEXT_SEARCH from '../cofig/Url';

const searchByFullText = (terms) => {
    return fetch(`${WASABI_FULLTEXT_SEARCH}/${terms}`)
    .then((result) => result.json())
    .catch((err) => console.log(err));
}

export default searchByFullText;