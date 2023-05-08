import { useEffect, useState } from "react";
// import Input from '../../components/Input';
import "./index.scss";
import axios from "axios";

const Tambah = () => {
  const [product, setProduct] = useState({
    name: String,
    price: Number,
    stock: Number,
    status: false
  });

  const handleFormChange = (e) => {
    // console.log(e)
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  function handleSubmit() {
    const data = product;
    axios
      .post("http://localhost:3000/api/product", data)
      .then(() => {
        alert(JSON.stringify(data));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    axios.get("http://localhost:3000/api/product").then((err) => {
      console.log(err);
    });
  }, []);

  return (
    <div className="main">
      <div className="card">
        <h2>Tambah Produk</h2>
        <br />
        <form>
          <input
            className="form-input"
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
            onChange={handleFormChange}
          />
          <input
            name="stock"
            type="number"
            placeholder="Stock Product..."
            className="form-input"
            onChange={handleFormChange}
          />
          <input
            name="status"
            type="checkbox"
            value="true"
            onChange={handleFormChange}
          />
          {/* <Input name="name" type="text" placeholder="Nama Produk..." label="Nama" />
          <Input name="price" type="number" placeholder="Harga Produk..." label="Harga"/>
          <Input name="Stock" type="number" placeholder="Stock Produk..." label="Stock"/>
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
  );
};

export default Tambah;
