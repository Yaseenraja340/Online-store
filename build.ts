interface Author {
    id:number,
    name:string,
    bio:string
}

 type Comment={
    author:Author;
    content:string;
    timestamp:Date;
 }


 interface Post {
    id:number,
    title:string,
    content:string,
    author:Author,
    comments:Comment[]
 }


function sortPosts(){
   return posts
 }
 
 const author1: Author = { id: 1, name: 'raja yaseen', bio: 'I am student of PIAIC' };
 
 const comment1: Comment = { author: author1, content: 'intreresting course', timestamp: new Date() };
 
 
 const post1: Post = { id: 1, title: 'mobile phones', content: 'this is the content of mobile phones', author: author1, comments: [comment1] };

 
 const posts: Post[] = [post1];
 
 const sortedPosts = sortPosts();
 console.log(sortedPosts);
 
 





