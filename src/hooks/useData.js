import {getData} from '../api/dataApi.js';

export const fetchData = (type) => {
   
        
getData(type)
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