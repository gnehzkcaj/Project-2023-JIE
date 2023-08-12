import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import Typography  from '@mui/material/Typography';

export default function TitlebarImageList() {
  return (
    <ImageList sx={{ width: 600, height: 550 }}>
      <h3>Upcoming Release</h3>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">In 2033, We are exciting to bring...</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=280&fit=crop&auto=format`}
            srcSet={`${item.img}?w=280&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            titlePosition="below" 
            title={
              <Typography variant="body1" style={{ whiteSpace: 'normal' }}>
                {item.title}
              </Typography>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://i.imgur.com/8qzRUVD.png',
    title: 'Pokémon Gallery and Games',
  },
  {
    img: 'https://i.imgur.com/e4QD8WJ.png',
    title: 'Niija Pikachu',
  },
  {
    img: 'https://i.imgur.com/Jx2tlnp.png',
    title: 'Pokémon with Marvel Heros',
  },
  {
    img: "https://i.imgur.com/EZ5cPxX.png",
    title: 'Pikachu with Iron Man',
  },
  {
    img: 'https://i.imgur.com/YTxGnca.png',
    title: 'The Avengers with Pikachu',
  },
  {
    img: 'https://i.imgur.com/mu7pHNb.png',
    title: 'Captain Pikachu',
  },
  {
    img: 'https://i.imgur.com/aDYNO9I.png',
    title: 'Kongfu Pikachu and Panda',
  },
  {
    img: 'https://i.imgur.com/R7LBz0J.png',
    title: 'Spider Pikachu',
  },
];