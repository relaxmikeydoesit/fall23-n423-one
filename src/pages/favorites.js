import React from 'react';
import useAppState from '@/useHooks/useAppState';
import { Grid, Button, Header, Icon } from 'semantic-ui-react';
import DogImage from '@/components/DogImage';
import DogInfo from './doginfo';
import { Link } from 'next/link';

export default function Favorites() { 
    const appState = useAppState(); 

    function changeName() { 
        const titles = ['Helpful', 'Hookah', 'Spicy', 'Kiwi', 'Techie'];
        const randomTitleIndex = Math.floor(Math.random() * titles.length);

        appState.updateAppState({ user: `Mikey the 
        ${titles[randomTitleIndex]} Guy` });
     }
    return (
    <>
        <Grid columns={1}>
            <Grid.Column>
                <Header as='h1'>{appState.user}&apos;s Favorites</Header>
            </Grid.Column>
            <Grid.Column>
                <Button content='Change Name' color='purple' icon='user' onClick={changeName}/>
                </Grid.Column>
                <Grid.Row columns={5}>
                {appState.favoriteDogs.map((dog) => {
                    return <DogImage key={dog.id} src={dog.url} onClick={DogInfo}/>
                })}
                </Grid.Row>
</Grid>
</>
    );
    }