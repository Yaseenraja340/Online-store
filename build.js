function sortPosts() {
    return sortPosts;
}
const author1 = { id: 1, name: 'raja yaseen', bio: 'I am student of PIAIC' };
const comment1 = { author: author1, content: 'intreresting course', timestamp: new Date() };
const post1 = { id: 1, title: 'mobile phones', content: 'this is the content of mobile phones', author: author1, comments: [comment1] };
;
const posts = [post1];
const sortedPosts = sortPosts();
console.log(sortedPosts);
export {};
