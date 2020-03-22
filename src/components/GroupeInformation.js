import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';

const GroupInformation = ({ data }) => (
  <TableContainer component={Paper}>
    <Table>
      <TableBody>
        <TableRow key={1}>
          <TableCell>Date de naissance</TableCell>
          <TableCell>{data.lifeSpan.begin} {data.lifeSpan.end !== '' && <span> -> {data.lifeSpan.end}</span>}</TableCell>
        </TableRow>
        <TableRow key={2}>
          <TableCell>Location</TableCell>
          <TableCell>{data.location.country} - {data.location.city}</TableCell>
        </TableRow>
        <TableRow key={3}>
          <TableCell>Genre</TableCell>
          <TableCell>{data.genres.join(' - ')}</TableCell>
        </TableRow>
        <TableRow key={4}>
          <TableCell>Label</TableCell>
          <TableCell>{data.labels.join(' - ')}</TableCell>
        </TableRow>
        <TableRow key={5}>
          <TableCell>Nombre de fans</TableCell>
          <TableCell>{data.deezerFans}</TableCell>
        </TableRow>
        <TableRow key={6}>
          <TableCell>Artiste(s) associé(s)</TableCell>
          <TableCell>{data.associatedMusicalArtist.length > 0 ? data.associatedMusicalArtist.join(' - ') : 'Aucun'}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
);

GroupInformation.propTypes = {
  data: PropTypes.object
}

export default GroupInformation;