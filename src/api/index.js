import { Chance } from "chance";

const chance = Chance();

export const fakeUserData = ()=> {

    console.log( chance.name({ middle: true }));
    //return
   return chance.name({ middle: true });

};

