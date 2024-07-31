async function makeAsyncRequest() {
    const url= 'https://procodrr.vercel.app/?sleep=1000';
    const response = await fetch(url);
    const data = await response.json();
    return(data);
    // console.log(response);
    // console.log('hiii');
}
makeAsyncRequest().then(console.log())
// function addTwoNumbers(){
//     return 45+54;
// }