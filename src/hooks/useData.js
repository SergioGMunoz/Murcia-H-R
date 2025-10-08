import {getData as getDataApi} from '../api/dataApi.js';

export const getData = (type) => {
   
        
getDataApi(type)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log('ERROR: ', err)
    })
    .finally (() =>{
        console.log('FINALLY RUNS')
    })
}