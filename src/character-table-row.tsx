import React from 'react';
import { CharacterEntity } from "./model";

interface Props {
    character: CharacterEntity;
}

export const CharacterTableRow: React.FC<Props> = (props) => {
    const { character } = props;
  
    return (
      <tr>
        <td>
          <img src={character.image} style={{ width: "10rem" }} />
        </td>
        <td>{character.name}</td>
        <td>{character.status}</td>
        <td>{character.species}</td>
        <td>{character.type}</td>
        <td>{character.gender}</td>
        
      </tr>
    );
};