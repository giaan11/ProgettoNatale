import React, { useState } from 'react';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from '@mui/material';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import regali from '../Models/regali.json';
import '../index.css';
import { isMobile } from 'react-device-detect';

function Home() {
  const [presents, setPresents] = useState(regali);

  const redirect = (link) => {
    window.open(link);
  }

  console.log(isMobile);


  return (
    <div
      style={{
        width: isMobile ? '66%' : '33%',
        height: '1000px',
        backgroundColor: '#e6e1be',
        textAlign: 'center',
        boxShadow: '-5px 0 10px rgba(0, 0, 0, 0.5), 5px 0 10px rgba(0, 0, 0, 0.5)',
      }}>
      <Typography
        variant={isMobile ? 'h5' : 'h4'}
        style={{ padding: isMobile ? '10px' : '20px', color: '#9e503c' }}
      >
        Christmas 2023 Gianluca
      </Typography>
      <List
        style={{
          overflow: 'auto',
          boxSizing: 'inherit',
          height: '100%',
          paddingLeft: isMobile ? '12px' : '25px',
        }}
      >
        {presents.map((present) => {
          return (
            <ListItem
              key={present.id}
              onClick={() => redirect(present.link)}
            >
              <ListItemIcon>
                <CardGiftcardIcon style={{ color: '#9e503c' }} fontSize='large' />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="h6">
                    {present.name}
                  </Typography>
                }
                secondary={
                  <Typography variant="subtitle2">
                    {present.description}
                  </Typography>
                }
              />
            </ListItem>
          )
        })}
      </List>
    </div >
  );
}

export default Home;
