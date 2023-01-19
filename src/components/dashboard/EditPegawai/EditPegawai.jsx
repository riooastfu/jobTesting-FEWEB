import React, { useEffect, useState } from 'react';
import './editpegawai.css';

//Misc Import
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const EditPegawai = () => {
    const [nama, setNama] = useState("");
    const [tempat_lahir, setTempatLahir] = useState("");
    const [departemen, setDepartemen] = useState("");
    const [pt, setPT] = useState("");
    const [lokasi_kerja, setLokasiKerja] = useState("");
    const [tgl_lahir, setTglLahir] = useState("");

    const [date, setDate] = useState();
    const [selectedDate, setSelectedDate] = useState("");

    useEffect(() => {
        getPegawaiByNik();
    }, [])

    const navigate = useNavigate();
    const { nik } = useParams();

    const updatePegawai = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/pegawai/${nik}`, {
                nama, departemen, pt, lokasi_kerja
            });
            navigate("/");
        } catch (error) {
            console.log("error: ", error)
        }
    }

    const getPegawaiByNik = async () => {
        const response = await axios.get(`http://localhost:5000/pegawai/${nik}`);
        setNama(response.data.pegawai.nama);
        // setTglLahir(response.data.tgl_lahir)
        // setSelectedDate(response.data.tgl_lahir);
        setTempatLahir(response.data.tempat_lahir);
        setDate(response.data.tgl_lahir);
        setDepartemen(response.data.departemen);
        setPT(response.data.pt);
        setLokasiKerja(response.data.lokasi_kerja);
    }

    return (
        <section className="tambah__pegawai container section">
            <h2 className="section__title">Edit Pegawai.</h2>

            <div className="form__container">
                <form onSubmit={updatePegawai}>
                    <div className="field">
                        <p>Nama</p>
                        <input type="text" className='input' value={nama} onChange={(e) => setNama(e.target.value)} placeholder='Nama' />
                    </div>

                    <div className="field">
                        <p>Tempat Lahir</p>
                        <input type="text" className='input' value={tempat_lahir} onChange={(e) => setTempatLahir(e.target.value)} placeholder='Tempat Lahir' />
                    </div>

                    <div className="field">
                        <p>Tanggal Lahir</p>
                        <input type="date" className='input' value={date} onChange={(e) => setDate(e.target.value)}/>
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
                        <button className="btn__save" type='submit'>Update</button>
                    </div>
                </form>
            </div>
        </section>
    )
}
