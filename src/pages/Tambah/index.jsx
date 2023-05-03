
import { useState } from 'react';
import Input from '../../components/Input';
import './index.scss';
import axios from 'axios';

const Tambah = () => {
  useState(() => {
    axios.post("http://localhost:3000/api/product")
  }, [])
  return (
    <div className="main">
      <div className="card">
        <h2>Tambah Produk</h2>
        <br />
        <form>
          <Input name="name" type="text" placeholder="Nama Produk..." label="Nama"/>
          <Input name="price" type="number" placeholder="Harga Produk..." label="Harga"/>
          <Input name="Stock" type="number" placeholder="Stock Produk..." label="Stock"/>
          <Input name="status" type="checkbox" label="Active" checked/>
          <button type="submit" className="btn btn-primary">Simpan</button>
        </form>
      </div>
    </div>
  )
}

export default Tambah;