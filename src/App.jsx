import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { Container, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



export default function App() {
  return (
    <Container maxWidth='lg' sx={{ marginTop: '40px', bgcolor: "#F8F4F0", padding: "40px" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} >
          {/* above 1 Card */}
          <Grid size={{ xs: 12, md: 4 }} >
            <Paper sx={{ padding: '24px', bgcolor: "black", borderRadius: "12px" }}>
              <Typography variant='subtitle' sx={{ color: '#fff', fontSize: '14px' }}>
                Current Balance
              </Typography>
              <Typography variant='h4' sx={{ color: '#fff', padding: '12px 0 0 0' }}>
                $4,836.00
              </Typography>
            </Paper>
          </Grid>

          {/* above 2 Card */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper sx={{ padding: '24px', borderRadius: "12px" }}>
              <Typography variant='subtitle' sx={{ color: 'black', fontSize: '14px' }}>
                Current Balance
              </Typography>
              <Typography variant='h4' sx={{ color: 'black', padding: '12px 0 0 0' }}>
                $4,836.00
              </Typography>
            </Paper>
          </Grid>

          {/* above 3 Card */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper sx={{ padding: '24px', borderRadius: "12px" }}>
              <Typography variant='subtitle' sx={{ color: 'black', fontSize: '14px' }}>
                Current Balance
              </Typography>
              <Typography variant='h4' sx={{ color: 'black', padding: '12px 0 0 0' }}>
                $4,836.00
              </Typography>
            </Paper>
          </Grid>
        </Grid>


        <Grid container spacing={2} sx={{ marginTop: '40px' }}>

          {/*below 1 Card */}
          <Grid size={{ xs: 12, md: 6 }} >
            <Paper sx={{ padding: '40px', display: "flex", flexDirection: "column", gap: "20px" }}>
              <Button variant="text">Text</Button>
              <Button variant="contained">Contained</Button>
              <Button variant="outlined">Outlined</Button>
              <ButtonGroup variant="contained" aria-label="Basic button group" sx={{ justifyContent: "center" }}>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>
            </Paper>

          </Grid>

          {/*below  2 Card */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper sx={{ padding: '40px' }}>
              <List sx={{ padding: '10px' }}>
                <ListItem>
                  <ListItemText primary="Full width variant below" />
                </ListItem>
                <Divider component="li" />
                <ListItem>
                  <ListItemText primary="Inset variant below" />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemText primary="Middle variant below" />
                </ListItem>
                <Divider variant="middle" component="li" />
                <ListItem>
                  <ListItemText primary="List item" />
                </ListItem>
              </List>
            </Paper>
          </Grid>

          {/*below 3 card */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper sx={{ padding: '40px' }}>
              <Card sx={{ boxShadow: 'none', borderBottom: '1px solid gray' }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      R
                    </Avatar>
                  }
                  action={
                    <IconButton sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography variant='h7' fontSize="14px" fontWeight="bold">+$75.50</Typography>
                      <Typography variant='body1' fontSize="12px">19 Aug 2024</Typography>
                    </IconButton>

                  }
                  title="Shrimp and Chorizo Paella"
                />
              </Card>
              <Card sx={{ boxShadow: 'none', borderBottom: '1px solid gray' }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      R
                    </Avatar>
                  }
                  action={
                    <IconButton sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography variant='h7' fontSize="14px" fontWeight="bold">+$75.50</Typography>
                      <Typography variant='body1' fontSize="12px">19 Aug 2024</Typography>
                    </IconButton>

                  }
                  title="Shrimp and Chorizo Paella"
                />
              </Card>
              <Card sx={{ boxShadow: 'none', borderBottom: '1px solid gray' }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      R
                    </Avatar>
                  }
                  action={
                    <IconButton sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography variant='h7' fontSize="14px" fontWeight="bold">+$75.50</Typography>
                      <Typography variant='body1' fontSize="12px">19 Aug 2024</Typography>
                    </IconButton>

                  }
                  title="Shrimp and Chorizo Paella"
                />
              </Card>
            </Paper>
          </Grid>

          {/*below 4 Card */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper sx={{ padding: '40px' }}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  Accordion 1
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  Accordion 2
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
              </Accordion>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>

  );
}