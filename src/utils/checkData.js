import PostService from '../API/PostService';

const checkData = (setData) => {

    const fetchData = async () => {
        const data = await PostService.fetchData()
        setData(data);
    }

    fetchData();

    setInterval(async () => {
        fetchData();
    }, 3000);
}

export default checkData