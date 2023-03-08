import { results } from '../js/data.js';

const firstJob = new URLSearchParams(location.search).get('first');
const secondJob = new URLSearchParams(location.search).get('second');

//FirstJob
const jobTitleEl = document.querySelector('.job-title');
const jobDiscription1El = document.querySelector('.job-discription1');
const jobDiscription2El = document.querySelector('.job-discription2');
const jobDiscription3El = document.querySelector('.job-discription3');
const jobDiscription4El = document.querySelector('.job-discription4');

jobTitleEl.innerHTML = results[firstJob[0]]['title']
jobDiscription1El.innerHTML = results[firstJob[0]]['results'][0]
jobDiscription2El.innerHTML = results[firstJob[0]]['results'][1] 
jobDiscription3El.innerHTML = results[firstJob[0]]['results'][2] 
jobDiscription4El.innerHTML = results[firstJob[0]]['results'][3] 

//SecondJob
const secondJobTitleEl = document.querySelector('.secondJob-title');
const secondJobDiscription1El = document.querySelector('.secondJob-discription1');
const secondJobDiscription2El = document.querySelector('.secondJob-discription2');
const secondJobDiscription3El = document.querySelector('.secondJob-discription3');
const secondJobDiscription4El = document.querySelector('.secondJob-discription4');

secondJobTitleEl.innerHTML = results[secondJob[0]]['title']
secondJobDiscription1El.innerHTML = results[secondJob[0]]['results'][0]
secondJobDiscription2El.innerHTML = results[secondJob[0]]['results'][1] 
secondJobDiscription3El.innerHTML = results[secondJob[0]]['results'][2] 
secondJobDiscription4El.innerHTML = results[secondJob[0]]['results'][3] 
