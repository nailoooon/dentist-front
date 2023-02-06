export const SERVER_NAME = "https://danai-service.onrender.com/"
export const CONFIG = {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
};

export const LogOut = () => {localStorage.removeItem("token")}
export const IsAuth = () => {return localStorage.getItem("token")}

// "http://localhost:5000/"