import React from 'react';
import { Text, Grid, Card } from '@nextui-org/react';

interface NotesGridProps {
  Notes:
    | {
        name: string;
        value: string;
        type: string;
        house: { [key: string]: unknown };
      }[]
    | undefined;
}

const NotesGrid: React.FC<NotesGridProps> = ({ Notes }) => {
  return (
    <div>
      <Grid.Container gap={2} justify="center">
        {Notes?.map((item, index) => (
          <Grid xs={18} md={6} sm={6} key={index}>
            <Card color="secondary" hoverable clickable>
              <Text color="black" size={30} weight="semibold">
                {item.name}
              </Text>
              <Text
                color="primary"
                size={14}
                transform="uppercase"
                weight="semibold"
              >
                {item.type}
              </Text>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </div>
  );
};

export default NotesGrid;
