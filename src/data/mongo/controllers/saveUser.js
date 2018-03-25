import User from '../models/User';

export const addUser = async data => {
    const article = User.create({
        name: data.name,
        phone: data.phone,
        token: '',
        createdAt: { type: Date, default: Date.now },
    });
    return article;
};

export default addUser;
