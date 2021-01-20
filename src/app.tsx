import React from "react";
import { CharacterEntity } from "./model";
import { CharacterTableRow } from "./character-table-row";
import {useDebounce} from 'use-debounce';


export const App = () => {
    const [filter, setFilter] = React.useState("");
    const [debouncedFilter] = useDebounce(filter, 1000)
    const [characters, setCharacters] = React.useState<CharacterEntity[]>([]);

    React.useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character?name=${filter}`)
          .then((response) => {
            if(!response.ok) {
              throw ('La liaste Burt Lancaster')
            }
            return response.json()
          })
          .then((json) => setCharacters(json.results ? json.results : [] )
          );
    }, [debouncedFilter]);
  
    return (
      <> 
        <div>

          <input value={filter} onChange={(e) => setFilter(e.target.value)}/>

        </div>    

        <table>
  
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Name</th>
              <th>Status</th>
              <th>Species</th>
              <th>Type</th>
              <th>Gender</th>
            </tr>

          </thead>
          
          <tbody>

            {characters.map((character) => (
                <CharacterTableRow key={character.name} character={character} />
            ))}

          </tbody>
        </table>
      </>
    );
};