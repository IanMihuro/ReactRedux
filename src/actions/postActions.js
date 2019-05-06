import { FETCH_POSTS, NEW_POST} from './types';

export function fetchPosts() {
    return function(dispatch){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts,
        }));
    }
};

export const createPost = (postData)=> dispatch =>{
    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',            
            header: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                title: postData.title,
                body: postData.body
            }),
        })
        .then(res => res.json())
        .then(data => dispatch({
            type: NEW_POST,
            payload: {...data, ...postData}
        }));

};