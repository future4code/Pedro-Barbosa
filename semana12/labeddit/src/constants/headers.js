const token = localStorage.getItem("token")
const headers = {
    headers: {
        Authorization: token
    }
}; 

export default headers;