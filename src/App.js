import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [serach, setSearch] = useState();

  const fetchData = () => {
    let url = "https://jsonplaceholder.typicode.com/photos";

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res)
        setData(res);
      });
  };
  useEffect(() => {
    fetchData();
  });
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  //  const filterdata = data.filter(value=>{
  //    if(serach == ""){
  //     return value;
  //    }else if(value.title){
  //      return value
  //    }
  //  })
  //console.log(filterdata)
  return (
    <>
      <tbody>
        <input type="text" value={serach} onChange={handleChange} />
        <tr>
          <th>Album Id</th>
          <th>Id</th>
          <th>Title</th>
          <th>Image</th>
          <th>Thumnail URL</th>
        </tr>
        {data
          .filter((value) => {
            if (serach === "") {
              return value;
            } else if (value.title) {
              return value;
            }
          })
          .map((value, i) => (
            <tr key={i}>
              <td>{value.albumId}</td>
              <td>{value.id}</td>
              <td>{value.title}</td>
              <td>
                <img style={{ width: "20px" }} src={value.url} />
              </td>
              <td>{value.thumbnailUrl}</td>
            </tr>
          ))}
      </tbody>
    </>
  );
}
