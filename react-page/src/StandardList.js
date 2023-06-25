import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Card from '@mui/material/Card';
import HikingIcon from '@mui/icons-material/Hiking';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import TerminalIcon from '@mui/icons-material/Terminal';
import DrawIcon from '@mui/icons-material/Draw';

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function StandardList() {

  return (
    <Box sx={{display: 'flex', justifyContent: 'center'}}>
      <Box sx={{ flexGrow: 1, maxWidth: 200}}>
        <Demo>
          <Card>
            <List>
                <ListItem>
                  <ListItemIcon>
                    <TerminalIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Programming"
                  />
                </ListItem>
                <ListItem>
                <ListItemIcon>
                  <SportsEsportsIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Play Video Games"
                />
                </ListItem>
                <ListItem>
                <ListItemIcon>
                  <HikingIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Explore new places"
                />
                </ListItem>
                <ListItem>
                <ListItemIcon>
                  <DrawIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Drawing"
                />
                </ListItem>
            </List>
          </Card>
        </Demo>
      </Box>
    </Box>
  );
}
