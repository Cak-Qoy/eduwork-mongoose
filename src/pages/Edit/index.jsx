import { useEffect, useState } from "react";
// import Input from "../../components/Input";
import axios from "axios";
import { useParams } from "react-router-dom";

const Edit = () => {

  const { id } = useParams();
  // const [product, setProduct] = useState({});
  const [putProduct, setPutProduct] = useState({
    name: String,
    price: Number,
    stock: Number,
    status: Boolean
  });

  const handleFormChange = (e) => {
    // console.log(e)
    const { name, value } = e.target;
    setPutProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  function handleSubmit() {
    const data = putProduct;
    axios
      .put(`http://localhost:3000/api/product/${id}`, data)
      .then(() => {
        alert(JSON.stringify(data));
        window.history.back()
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    axios.get(`http://localhost:3000/api/product/${id}`).then((res) => {
      setPutProduct(res.data)
    });
  }, []);

  return (
    <div className="main">
      <div className="card">
        <h2>Edit Produk</h2>
        <br />
        <form>
        <input
            className="form-input"
            value={putProduct.name}
            name="name"
            type="text"
            placeholder="Nama Product..."
            onChange={handleFormChange}
          />
          <input
            name="price"
            type="number"
            placeholder="Harga Product..."
            className="form-input"
            value={putProduct.price}
            onChange={handleFormChange}
          />
          <input
            name="stock"
            type="number"
            placeholder="Stock Product..."
            className="form-input"
            value={putProduct.stock}
            onChange={handleFormChange}
          />
          <input
            name="status"
            type="checkbox"
            value={putProduct.status}
            onChange={handleFormChange}
          />

          {/* <Input name="name" type="text" placeholder="Nama Produk..." label="Nama" value="test"/>
          <Input name="price" type="number" placeholder="Harga Produk..." label="Harga" value="20000000"/>
          <Input name="Stock" type="number" placeholder="Stock Produk..." label="Stock" value="10"/>
          <Input name="status" type="checkbox" label="Active" checked/> */}
          <button 
            type="submit" 
            className="btn btn-primary"
            onClick={handleSubmit}
            >
              Simpan
          </button>
        </form>
      </div>
    </div>
  )
}

export default Edit;