export const SERVER_NAME = "https://danai-service.onrender.com/"
export const CONFIG = {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Authorization": localStorage.getItem("token")
    }
};

export const CONFIGDATA = {
    headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Authorization":  "Bearer " + localStorage.getItem("token")
    }
}

export const LoadingData = 'Загружаем данные...'

export const LogOut = () => {localStorage.removeItem("token")}
export const IsAuth = () => {return localStorage.getItem("token")}

// "http://localhost:5000/"
//"https://danai-service.onrender.com/"