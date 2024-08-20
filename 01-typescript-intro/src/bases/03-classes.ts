import axios from "axios"
import { Move, PokeapiResponse } from "../interfaces/pokeapi-responses.interfaces"

export class Pok{
    // getter, the type goes afeter de '()'
        get imageUrl():string{
            return 'http//image'
        }
    //readonly does not allow to change the propertie
        constructor(public id: number,
            public readonly name: string){
            
        }

        async getResponse():Promise<Move[]>{
             const {data} =  await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4')
             return data.moves;
        }
    }
    
    export const pikachu = new Pok(4, 'pikachu')