import axios from "axios";

export const api = axios.create({
    baseURL : 'http://localhost:4000'
})


// npx json-server -p 4000 -w src/folderName/file.json