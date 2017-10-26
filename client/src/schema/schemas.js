import { schema } from 'normalizr';

const user = new schema.Entity('users');

const post = new schema.Entity('posts', {
    author: user
});

export {
    user,
    post
};