import axios from 'axios'

export default class PostService {
    static async fetchData() {
        try {
            const response = await axios.get('/inputData.json');
            return response.data;               
        } catch (error) {
            console.log(error)
        }

    }
}