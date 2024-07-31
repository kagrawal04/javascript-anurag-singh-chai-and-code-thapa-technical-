const xhr = new XMLHttpRequest();
xhr.responseType = 'json';
xhr.addEventListener('load', () =>{
    console.log('xhr');    
})
// xhr.open('GET' , 'https://6wrlmkp9u2.executive-api.us-east-1.amazonaws.com/?sleep=4000');
// xhr.open('GET' , 'https://dummyjson.com/users');
function makeHttpRequest(method, url, callback){
    const xhr = new XMLHttpRequest()
    xhr.responseType = 'json';
    xhr.addEventListener('load', ()=>{
        callback(xhr.response);
    })
    xhr.open(method, url);
    xhr.send();
}
makeHttpRequest('GET', 'https://dummyjson.com/users', (usersdata) =>{
    // console.log(data);
    // makeHttpRequest('GET', `https://dummyjson.com/users/${data.users[0].id}`, (data)=>{
    //     console.log(data);
    makeHttpRequest('GET', `https://dummyjson.com/posts/user/${usersdata.users[0].id}`, (postsdata)=>{
        console.log(postsdata.posts[0].id);
        makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postsdata.posts[0].id}`, (commentsdata)=>{
            console.log(commentsdata.comments[0].user.id);
            makeHttpRequest('GET', `https://dummyjson.com/users/${commentsdata.comments[0].user.id}`, (userData)=>{
                console.log(userData);
            })
        })
    })
})
