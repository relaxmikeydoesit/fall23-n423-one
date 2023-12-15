import React from 'react';
import { Grid, Button, Header } from 'semantic-ui-react';
import DogImage from '@/components/DogImage';
import styles from '@/styles/Home.module.css';
import useAppState from '@/useHooks/useAppState';

export default function Home() {
const appState = useAppState();

// console.log(appState);

  function getDogImages() {
    fetch('https://api.thedogapi.com/v1/images/search?mime_types=jpg,png&format=json&has_breeds=true&order=RANDOM&limit=9')
    .then(response => response.json())
    .then(response => {
      appState.updateAppState( {dogImages: response} );
  })
  .catch((e) => {
    console.warn(e);
  });  
}

function saveDogImage(selectedDog) {
  appState.updateAppState({
    favoriteDogs: [...appState.favoriteDogs.concat(selectedDog)] });  
} 
  

  return (
  <>
<Grid className={styles.grid} columns='1'>
    <Grid.Column>
        <Header as='h2'>Header Pup:  Shadow. All other dogs are from TheDogAPI.</Header>
      </Grid.Column>
      <Grid.Column>
        <Button className={styles.button} content='Reload Dogs' icon='sync' color='orange' onClick={getDogImages} />
      </Grid.Column>
    <Grid.Row className={styles.grid} columns='5'>
      {appState.dogImages.map((dogImage) => {

        return <DogImage key={dogImage.id}
         src={dogImage.url} onClick={() => saveDogImage(dogImage)} centered/>; 
      })}
      {/* <DogImage src={dogImages[0]?.url} /> */}
    </Grid.Row>
  </Grid>
  </>
 )
} 