const resolveBtn = document.querySelector('#resolve-btn');
const rejectBtn = document.querySelector('#reject-btn')
const p = new Promise((resolve, reject)=>{
    // reject({name:'kaushal'})
    // resolve({name: 'kasuhal'})
    resolveBtn.addEventListener('click' , ()=>{
        resolve('Promise Resolved');
    })
    rejectBtn.addEventListener('click' , ()=>{
        reject  ('Promise Rejected');
    })
})

p.then((data)=>{
    // console.log('hiii');
    console.log(data);
}).catch((err)=>{
    // console.log('rejected');
    console.log(err);
})