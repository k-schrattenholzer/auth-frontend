import request from "superagent";

const URL = 'https://pacific-beach-07760.herokuapp.com'

//getTaskList
export async function getTaskList(token) {
    const response = await request
    .get(`${URL}/api/task`)
    .set('Authorization', token)

    return response.body;
}

//completeTask
export async function completeTask(id, status, token) {
    const response = await request
    .put(`${URL}/api/task/${id}`)
    .send({ status: status })
    .set('Authorization', token)

    return response.body;
}

//addTask
export async function addTask(task, token) {
    const response = await request
    .post(`${URL}/api/task`)
    .send({description: task})
    .set('Authorization', token)

    return response.body;
}
//login
export async function userSignUp(email, password) {
    const response = await request
    .post(`${URL}/auth/signup`)
    .send({ email, password })

    return response.body;
}

//signup
export async function userLogin(email, password) {
    const response = await request
    .post(`${URL}/auth/signin`)
    .send({ email, password })

    return response.body;
}