import axios from "axios";

const instance=axios.create({
    baseURL :"https://api.themoviedb.org/3/",
    headers :{ Authorization:' Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjIyY2E5MTM2YTAyYmM4ZGUzYTEwMzhjMjE0Y2ZjMiIsIm5iZiI6MTc3Mzk3ODA1OC43LCJzdWIiOiI2OWJjYzFjYTYxZmE1YmU0NTQ1ZmIzYjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.UQbuXKPe8Vikfi9jj-J-GwiQdcMR69y288wZEjOuWLg' ,
     accept: 'application/json'}
})
export default instance;