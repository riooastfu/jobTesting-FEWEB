import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './dashboard.css'

import { Link, useParams } from 'react-router-dom';

export const Dashboard = () => {
  const [pegawai, setPegawai] = useState([]);

  useEffect(() => {
    getPegawai();
  }, []);

  const getPegawai = async () => {
    const response = await axios.get("http://localhost:5000/pegawai");
    setPegawai(response.data);
  }

  const deleteDataPegawai = async (nik) => {
      try {
        await axios.delete(`http://localhost:5000/dt_pegawai/${nik}`)
        await axios.delete(`http://localhost:5000/pegawai/${nik}`)

        getPegawai()
      } catch (error) {
        console.log("Error", error);
      }
  }

  return (
    <section className="dashboard container section">
      <h2 className='section__title'>Dashboard.</h2>

      <div className="table__container">
        <table className='table__content'>
          <thead>
            <tr>
              <th>No</th>
              <th>NIK</th>
              <th>Nama</th>
              <th>Tempat Lahir</th>
              <th>Tanggal Lahir</th>
              <th>Departemen</th>
              <th>PT</th>
              <th>Lokasi Kerja</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {pegawai.map((item, index) => (
              <tr key={pegawai.id}>
                <td>{index + 1}</td>
                <td>{item.nik}</td>
                <td>{item.pegawai.nama}</td>
                <td>{item.tempat_lahir}</td>
                <td>{item.tgl_lahir}</td>
                <td>{item.departemen}</td>
                <td>{item.pt}</td>
                <td>{item.lokasi_kerja}</td>
                <td>
                  <Link to={`edit/${item.pegawai.nik}`} className='btn__edit'>Edit</Link>
                  <button onClick={ ()=> deleteDataPegawai(item.nik) } className="btn__delete">Delete</button>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </section>
  )
}
