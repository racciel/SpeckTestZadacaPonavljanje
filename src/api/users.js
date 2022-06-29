import Base from "./api";

export const LoginUser = (user) => {
    return fetch(`${Base}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify ({
            email: user.email,
            password: user.password,
        }),
    }).then((res) =>{
        if (!res.ok) {
            throw res;
          }
          return res.json();
    });
};

export const getAllUsers = accessToken => {
    return fetch(`${Base}/users`,{
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    })
    .then(res => {
        if(!res.ok) throw res
        return res.json();
    })
}