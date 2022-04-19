export const object = {
    usernames: 'Heidi',
    address: 'Swiss Alps',
};

export default object;

/*
=> 1 & 2 : default exports
=> 3 & 4 : named exports

1.  

const object = {
    user: 'Heidi',
    address: 'Swiss Alps',
};

export default object;

2.
export defualt {
    user: 'Uncle Alps'
    address: 'Hills',
};

3.
export const object = {
    user: 'Dete',
    address: 'Swiss City',
};

4.
const object = {
    user: 'Peter',
    address: 'Mountains',
}

export { object };
*/
