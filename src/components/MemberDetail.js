import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Alert from '@material-ui/lab/Alert';
import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  details: {
    flexDirection: "column"
  }
}));

const MemberDetail = ({ member }) => {
  const classes = useStyles();
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>{member.name}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.details}>
        <Box mb={3}>
          <Alert severity="info">
            <Typography component="p" variant="body1">{member.abstract}</Typography>
          </Alert>
        </Box>
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              <TableRow key={1}>
                <TableCell>Date de naissance</TableCell>
                <TableCell>{member.birthDate}</TableCell>
              </TableRow>
              <TableRow key={2}>
                <TableCell>Instrument</TableCell>
                <TableCell>{member.instruments.join(' - ')}</TableCell>
              </TableRow>
              <TableRow key={3}>
                <TableCell>Sexe</TableCell>
                <TableCell>{member.gender === "Male" ? "Homme" : "Femme"}</TableCell>
              </TableRow>
              <TableRow key={4}>
                <TableCell>Date début dans le groupe</TableCell>
                <TableCell>{member.begin}</TableCell>
              </TableRow>
              <TableRow key={5}>
                <TableCell>Date fin dans le groupe</TableCell>
                <TableCell>{member.ended ? member.end : "Toujours membre du groupe"}</TableCell>
              </TableRow>
              <TableRow key={6}>
                <TableCell>All Music</TableCell>
                <TableCell><Link href={member.urlAllmusic} target="_blank">{member.urlAllmusic}</Link></TableCell>
              </TableRow>
              <TableRow key={7}>
                <TableCell>Discogs</TableCell>
                <TableCell><Link href={member.urlDiscogs} target="_blank">{member.urlDiscogs}</Link></TableCell>
              </TableRow>
              <TableRow key={8}>
                <TableCell>Second hand songs </TableCell>
                <TableCell><Link href={member.urlSecondHandSongs} target="_blank">{member.urlSecondHandSongs}</Link></TableCell>
              </TableRow>
              <TableRow key={9}>
                <TableCell>Wikidata</TableCell>
                <TableCell><Link href={member.urlWikidata} target="_blank">{member.urlWikidata}</Link></TableCell>
              </TableRow>
              <TableRow key={10}>
                <TableCell>Wikipedia</TableCell>
                <TableCell><Link href={member.urlWikipedia} target="_blank">{member.urlWikipedia}</Link></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
};

MemberDetail.propTypes = {
  member: PropTypes.object
}

export default MemberDetail;