import { Link } from "react-router-dom";
import "./index.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [product, setProduct] = useState([]);

  function getPostApi() {
    axios.get("http://localhost:3000/api/product").then((result) => {
      setProduct(result.data);
    });
  }
  
  function handleRemove(data) {
    axios.get(`http://localhost:3000/api/product/${data}`).then((res) => {
      if (window.confirm(`Anda yakin ingin menghapus product "${res.data.name}" ?`)) {
        axios.delete(`http://localhost:3000/api/product/${data}`).then(() => getPostApi())
      }
    })
  }

  useEffect(() => {
    getPostApi()
  }, []);


  return (
    <div className="main">
      <Link to="/tambah" className="btn btn-primary">
        Tambah Produk
      </Link>
      <div className="search">
        <input type="text" placeholder="Masukan kata kunci..." />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th className="text-right">Price</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {product.map((result, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{result.name}</td>
                <td className="text-right">RP. {result.price}</td>
                <td className="text-center">
                  <Link to={`/detail/${result._id}`} className="btn btn-sm btn-info">
                    Detail
                  </Link>
                  <Link to={`/edit/${result._id}`} className="btn btn-sm btn-warning">
                    Edit
                  </Link>
                  <Link to="#" className="btn btn-sm btn-danger" onClick={() => handleRemove(result._id)}>
                    Delete
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
