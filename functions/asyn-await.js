/* call back hell (this is the example of callback hell)*/
// function getuser(id, callback) {
//   setTimeout(() => {
//     console.log("fetched user");
//     callback({ id: id, name: "Rifthi" });
//   }, 1000);
// }

// function getpost(user, callback) {
//   setTimeout(() => {
//     console.log("fetched post", user.name);
//     callback(["post 1", "post 2"]);
//   }, 1000);
// }

// function getcomment(post, callback) {
//   setTimeout(() => {
//     console.log("fetched commend", post);
//     callback(["comment 1", "comment 2"]);
//   }, 1000);
// }

// getuser(1, function (user) {
//   getpost(user, function (post) {
//     getcomment(post[0], function (comments) {
//       console.log(getcomment);
//     });
//   });
// });


/*its prommise base (this is give me the alternative option for callback hell)*/
// function getuser(id) {
//   return new Promise ((resolve)=>setTimeout(() => {
//     console.log("fetched user");
//     resolve({ id: id, name: "Rifthi" });
//   }, 1000));
// }

// function getpost(user) {
//   return new Promise ((resolve)=>setTimeout(() => {
//     console.log("fetched post", user.name);
//     resolve(["post 1", "post 2"]);
//   }, 1000));
// }

// function getcomment(post) {
//   return new Promise ((resolve) => setTimeout(() => {
//     console.log("fetched commend", post);
//     resolve(["comment 1", "comment 2"]);
//   }, 1000));
// }

// getuser(1)
//     .then((user) => getpost(user))
//     .then((post)=>getcomment(post[0]))
//     .then((comment)=>console.log(comment));

/*Asyn Await method*/
async function fetch() {
    const user = await getuser();
    const post = await getpost(user);
    const comment = await getcomment(post[0]);
    console.log(comment);
    
}
console.log( fetch());