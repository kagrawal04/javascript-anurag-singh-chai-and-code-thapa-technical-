// const user = {
//     name: 'KAUSHAL',
//     age: 25
// }

// try{
//     // console.log(err);
//     console.log(user.number.mobile.message);
// }catch (err){
//     console.dir(err.message);
// } finally{
//     console.log("hello world");
// }
// console.log(3+7);
// // console.log("hello");

async function makeAsyncRequest() {
    try{
        const url= 'https://procodrr.vercel.app/?sleep=1000';
    const response = await fetch(url);
    const data = await response.json();
    return(data);

    } catch(err){
        alert("somethimg went wrong");
    }
    console.log('hiii');
}
makeAsyncRequest()



