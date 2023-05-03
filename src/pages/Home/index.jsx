import { Link } from "react-router-dom";
import "./index.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = (props) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/api/product").then((result) => {
      setProduct(result.data);
    });
  }, []);

  return (
    <div className="main">
      <Link to="/tambah" className="btn btn-primary">
        Tamah Produk
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
                  <Link to="/detail" className="btn btn-sm btn-info">
                    Detail
                  </Link>
                  <Link to="/edit" className="btn btn-sm btn-warning">
                    Edit
                  </Link>
                  <Link to="#" className="btn btn-sm btn-danger">
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
