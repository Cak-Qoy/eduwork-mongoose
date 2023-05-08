import { Link, useParams } from "react-router-dom";
import './index.scss';
import { useEffect, useState } from "react";
import axios from "axios";

const Detail = () => {
  const [detailProduct, setDetailProduct] = useState({});
  const { id } = useParams()

  function getApiById() {
    axios.get(`http://localhost:3000/api/product/${id}`)
    .then((res) => {
      setDetailProduct(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    getApiById();
  }, []);

  return (
    <div className="main">
      <Link to="/" className="btn btn-primary">Kembali</Link>

      <table className="table">
        <tbody>
          <tr>
            <td>ID</td>
            <td>: {detailProduct._id}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>: {detailProduct.name}</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>: Rp. {detailProduct.price}</td>
          </tr>
          <tr>
            <td>Stock</td>
            <td>: {detailProduct.stock}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Detail;