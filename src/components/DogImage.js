import React from 'react';
import { Popup, Button, Image, Grid } from 'semantic-ui-react';

export default function DogImage({ src, children, onClick }) {
return (
<>
<Grid.Column>
        <Popup
          trigger={<Image src={src}/>}
          on='click'
          content={<Button color='pink'
           icon='plus' content={children ||
             'Save'} onClick={onClick}/>}
          />
      </Grid.Column>
</>

);
}
