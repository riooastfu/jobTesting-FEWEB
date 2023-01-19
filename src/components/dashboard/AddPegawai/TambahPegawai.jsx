import React, { useState } from 'react';
import './tambahpegawai.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const TambahPegawai = () => {
    const [nama, setNama] = useState("");
    const [departemen, setDepartemen] = useState("");
    const [pt, setPT] = useState("");
    const [lokasi_kerja, setLokasiKerja] = useState("");

    const navigate = useNavigate();

    const savePegawai = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/pegawai', {
                nama, departemen, pt, lokasi_kerja
            });
            navigate("/");
        } catch (error) {
            console.log("error: ", error)
        }
    }

    return (
        <section className="tambah__pegawai container section">
            <h2 className="section__title">Tambah Pegawai.</h2>

            <div className="form__container">
                <form onSubmit={savePegawai}>
                    <div className="field">
                        <p>Nama</p>
                        <input type="text" className='input' value={nama} onChange={(e) => setNama(e.target.value)} placeholder='Nama' />
                    </div>

                    <div className="field">

                    </div>

                    <div className="field">
                        <p>Departemen</p>
                        <input type="text" className='input' value={departemen} onChange={(e) => setDepartemen(e.target.value)} placeholder='Departemen' />
                    </div>
                    <div className="field">
                        <p>PT</p>
                        <input type="text" className='input' value={pt} onChange={(e) => setPT(e.target.value)} placeholder='PT' />
                    </div>
                    <div className="field">
                        <p>Lokasi Kerja</p>
                        <input type="text" className='input' value={lokasi_kerja} onChange={(e) => setLokasiKerja(e.target.value)} placeholder='Lokasi Kerja' />
                    </div>
                    <div className="field">
                        <button className="btn__save" type='submit'>Save</button>
                    </div>
                </form>
            </div>
        </section>
    )
}
