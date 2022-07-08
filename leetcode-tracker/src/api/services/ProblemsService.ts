import { AxiosInstance } from "../axios"

export const ProblemsService = () => {
    const getAllProblems = async () => {
        try {
            const allProblems = await AxiosInstance.get('/problemtracker/')
            console.log('All Problems are', allProblems)
            return allProblems
        } catch (err) {
            console.log('Error fetching data due to', err)
        }
        
        
    }

    
    getAllProblems()
}

export const postAProblem = async (data: any) => {
    try {
        const problem = await AxiosInstance.post('/problemtracker/', data)
        console.log('Problem successfully posted', problem)
    } catch (err) {
        console.log('Error posting problem due to: ', err)
    }
}
