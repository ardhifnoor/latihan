import React, {Component} from 'react';
import Firebase from '../firebase'

class Karyawan extends Component {

    constructor(){
        super();
        this.state = {
            karyawanList: []
        }
        this.inputElement = null;
    }

    componentWillMount(){
        let karyawanRef = Firebase.database().ref('karyawan').orderByKey().limitToLast(100);
        karyawanRef.on('value', snapshot =>{
            let values = snapshot.val() || {}
            this.setState({
                karyawanList: Object.keys(values).map(key => {
                    return {
                        key: key,
                        value: values[key]
                    }
                })
            });
        })
    }

    addKaryawan(e){
        e.preventDefault();
        Firebase.database().ref('karyawan').push(this.inputElement.value);
        this.inputElement.value = '';
    }

    deleteKaryawan(id){
        Firebase.database().ref('karyawan/'+id).remove();
    }

    renderKaryawan(karyawanList){
        return karyawanList.map((karyawan, i) => {
            return <li key={i}>{karyawan.value}&nbsp;&nbsp;&nbsp;
            <span onClick={e => this.deleteKaryawan(karyawan.key)}>[del]</span>
            </li>
        })
    }

    render(){
        return(
            <div>
                <h2>Input data karyawan :</h2>
                <form onSubmit={this.addKaryawan.bind(this)}>
                    <input type="text" ref={e => this.inputElement = e}/>
                    <input type="submit"/>
                </form>
                <h2>Daftar Karyawan</h2>
                <ul>
                    {this.renderKaryawan(this.state.karyawanList)}
                </ul>
            </div>
        )
    }
}

export default Karyawan;