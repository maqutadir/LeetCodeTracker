import { AxiosInstance } from "../axios"

const getAllProblems = async () => {
    try {
        const allProblems = await AxiosInstance.get('/problemtracker/')
        console.log('All Problems are', allProblems)
        return allProblems.data
    } catch (err) {
        console.log('Error fetching data due to', err)
    }
}

const postAProblem = async (data: any) => {
    try {
        const problem = await AxiosInstance.post('/problemtracker/', data)
        console.log('Problem successfully posted', problem)
    } catch (err) {
        console.log('Error posting problem due to: ', err)
    }
}

export {getAllProblems, postAProblem}
