import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const Search = ({ placeholder, searchFunction }) => {

    const [searchTerms, setSearchTerms] = useState('');

    const onTextChangeHandler = (e) => {
        e.preventDefault();
        setSearchTerms(e.target.value);
        searchFunction(e.target.value);
    }

    return (
        <TextField
            id="standard-basic"
            label={placeholder}
            variant="outlined"
            value={searchTerms}
            onChange={(e) => onTextChangeHandler(e)}
            fullWidth />
    )
};

Search.propTypes = {
    placeholder: PropTypes.string,
    searchFunction: PropTypes.func
};

export default Search;