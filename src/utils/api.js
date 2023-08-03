import axios from "axios";

const BASE_URL="https://api.themoviedb.org/3"

const TMDB_TOKEN ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjFiNWI1NjgwYmQ0ZTI5MTI1NmYxMDQ2Y2MwMDdjMSIsInN1YiI6IjY0YmUzYmExZTlkYTY5MDBjYjdjYWVkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VlwXHvHpXfx7biBo-p-YTjSA1GbXNAXoS42Wvo-EFPM"

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async(url, params)=>{
try{
  const {data} = await axios.get(BASE_URL + url, {
    headers,
    params

  })
  return data;
}catch(err){
console.log("error");
return err;
}
}