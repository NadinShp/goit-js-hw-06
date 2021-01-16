import users from "./users.js";

// 1-Получить массив имен всех пользователей (поле name).

const getUserNames = users => {
const usersNames = users.map(user => user.name);
    return usersNames;
}

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// 2-Получить массив объектов пользователей по цвету глаз (поле eyeColor).

const getUsersWithEyeColor = (users, color) => {
    const UsersWithEyeColor = users.filter(user => (user.eyeColor === color));
    return UsersWithEyeColor;
}

console.table(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// 3-Получить массив имен пользователей по полу (поле gender).

const getUsersWithGender = (users, gender) => {
    const usersWithGender = users
        .filter(user => (user.gender === gender))
        .map(user => user.name);
    return usersWithGender;
}
console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// 4-Получить массив только неактивных пользователей (поле isActive).

const getInactiveUsers = users => {
    const inactiveUsers = users.filter(user => (!user.isActive));
    return inactiveUsers;
}

console.table(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// 5-Получить пользоваля (не массив) по email (поле email, он уникальный).

const getUserWithEmail = (users, email) => {
    const userWithEmai = users.find(user => (user.email === email));
    return userWithEmai;
}

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
 
// 6-Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

const getUsersWithAge = (users, min, max) => {
    const userWithAge = users.filter(user => (user.age > min && user.age < max));
    return userWithAge;
};

console.table(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.table(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// 7-Получить общую сумму баланса (поле balance) всех пользователей.

const calculateTotalBalance = users => {
    const totalBalance = users.reduce((acc, user) => acc + user.balance, 0);
    return totalBalance;
};

console.log(calculateTotalBalance(users)); // 20916

// 8-Массив имен всех пользователей у которых есть друг с указанным именем.

const getUsersWithFriend = (users, friendName) => {
    const userWithFriend = users
        .filter(user => user.friends.includes(friendName))
        .map(user => user.name);
    return userWithFriend;
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// 9-Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

const getNamesSortedByFriendsCount = users => {
    const getNamesSortedByFriendsCount = users
        .map(user => {
        return {
            ...user,
            friends: user.friends.length,
        };
        })
        .sort(function(prevUser, nextUser) {
            return prevUser.friends - nextUser.friends;
        })
        .map(user => {
            return user.name;
    })
    return getNamesSortedByFriendsCount;
}

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// 10-Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = users => {
    const sortedUniqueSkills = users
        .reduce((acc, user) => {
            acc.push(...user.skills);
            return acc;
        }, [])
        .filter((user, index, arr) => arr.indexOf(user) === index)
        .sort((prev, next) => prev > next ? 1 : -1);
    return sortedUniqueSkills;
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]


