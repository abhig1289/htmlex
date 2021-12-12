const posts=[
    { title: 'post one', body :'this is post onw'},
    { title: 'post two',body :'this is post two'}
]

function getPost(post){
    setTimeout(()=>{
        output=``;
        posts.forEach((post)=>{
            output += `<li>${post.title}</li>`
        })
        document.body.innerHTML=output;
    },1000)
}


function createPost(post,callback){
    setTimeout(()=>{
        posts.push(post);
        callback();
    },2000)
}
createPost({title:'post third',body:'this is the post three'},getPost)


//promises

// function createPost(post){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             posts.push(post);
//             const error=false;
//             if(!error){
//                 resolve()
//             }else{
//                 reject('Error:Something went wrong');
//             }   
//     },2000);
// }
//     )};

// createPost({title:'post third',body:'this is the post three'})
// .then(getPost)
// .catch(err=>console.log(err));


// //PromiseAll
// const promise1=Promise.resolve('hello world');
// const promise2=10;
// const promise3=new Promise((resolve,reject)=>{
//     setTimeout(resolve,2000,'goodbye')})
// const promise4 = fetch(https://jsonplaceholder.typicode.com/users)
// .then(response => response.json())


// Promise.all([promise1,promise2,promise3,promise4]).then(values => console.log(values))

//async await

// async function init(){
//     await createPost({title:'post third',body:'this is the post three'});
//     getPost()
// } 


// init()

//async await
async function fetchawait(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data= await response.json();
    console.log(data);
} 
fetchawait();











