export const SERVER_NAME = "https://danai-service.onrender.com/"
export const CONFIG = {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Authorization": "Bearer " + localStorage.getItem("token")
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
export const loader = 'https://danai.onrender.com/static/media/loader.eca3132c9685f1d9a17f.gif'

export const LogOut = () => {localStorage.removeItem("token")}
export const IsAuth = () => {return localStorage.getItem("token")}

export const LoadingServices = [
    {_id: 0, name: "Загрузка...", subSectors: [
            {_id: 0, name: "Загрузка...", services: [
                    {_id: 0, name: "Загрузка...", price: 0},
                ]},
            {_id: 1, name: "Загрузка...", services: [
                    {_id: 0, name: "Загрузка...", price: 0},
                ]},
        ]
    },
    {_id: 1, name: "Загрузка...", subSectors: [
            {_id: 1, name: "Загрузка...", services: [
                    {name: "Загрузка...", price: 0},
                ]},
        ]
    },
]

// "http://localhost:5000/"
//"https://danai-service.onrender.com/"