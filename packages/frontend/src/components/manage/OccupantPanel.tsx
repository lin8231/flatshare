import { Text } from '@nextui-org/react';
import React from 'react';
import OccupantCard, { OccupantCardProps } from './OccupantCard';

interface OccupantPanelProps {
  cards: OccupantCardProps[];
  ownerView: boolean;
  totalRent: number;
  onSaveOccupant: (occupantDetails: OccupantCardProps) => void;
  onDeleteOccupant: (firebaseId: string) => void;
}

interface OccupantPanelConfig {
  ownerView: boolean;
  totalRent: number;
  onSaveOccupant: (occupantDetails: OccupantCardProps) => void;
  onDeleteOccupant: (firebaseId: string) => void;
}

export const PanelContext = React.createContext<OccupantPanelConfig>(
  {} as OccupantPanelConfig,
);

const OccupantPanel: React.FC<OccupantPanelProps> = (props) => {
  const { cards, ownerView, totalRent, onSaveOccupant, onDeleteOccupant } =
    props;
  return (
    <PanelContext.Provider
      value={{ ownerView, totalRent, onSaveOccupant, onDeleteOccupant }}
    >
      <Text
        size={24}
        weight={'bold'}
        color={'primary'}
        className="ml-5 inline-block"
      >
        Occupants
        <div className="bg-black h-0.5 w-full" />
      </Text>
      {cards.map((card) => (
        <OccupantCard {...card} />
      ))}
    </PanelContext.Provider>
  );
};

export default OccupantPanel;
