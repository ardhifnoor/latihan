import React, {Component} from 'react';
import Axios from 'axios';

class Karyawan extends Component {

    constructor(){
        super();
        this.state = {
            karyawan: []
        }
    }

    componentWillMount(){
        Axios
        .get('http://localhost:3001/karyawan')
        .then((response)=>{
            this.setState({
                karyawan : response.data
            })
        })
    }

    render(){

        var css = {
            border: '1px solid black',
            borderCollapse: 'collapse',
            padding: '12px'
        }

        const data = this.state.karyawan.map((karyawan, index)=>{
            var id = karyawan.id;
            var nama = karyawan.nama;
            var usia = karyawan.usia;
            var kota = karyawan.kota;
            return <tr style={css} key={index}>
                <td style={css}>{id}</td>
                <td style={css}>{nama}</td>
                <td style={css}>{usia}</td>
                <td style={css}>{kota}</td>
            </tr>
        })

        return(
            <div>
                <h2>Daftar Karyawan</h2>
                <table style={css}>
                    <tbody>
                        <tr>
                            <th style={css}>ID</th>
                            <th style={css}>Nama</th>
                            <th style={css}>Usia</th>
                            <th style={css}>Kota</th>
                        </tr>
                        {data}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Karyawan;