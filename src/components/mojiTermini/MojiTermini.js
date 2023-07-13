
import React from 'react'
import {useState,useEffect} from 'react';
import axiosConfig from '../../axiosConfig';

function MojiTermini() {
    const [korisnik,setKorisnik] = useState(null);
    const korisnik1 = JSON.parse(localStorage.getItem('korisnik'));
    useEffect(() => {
        setKorisnik(korisnik1);
        if(korisnik1 === null){
            window.location.href = '/login';
        }
        else{
        }
    }, [])

    function getMupName(id){
        axiosConfig.get(`api/mup/${id}`)
        .then((response) => {
            console.log(response.data.naziv);
            return response.data.naziv;
        }
        )
    }

    function parseDateandTime(date){
        const date1 = new Date(date);
        const date2 = date1.toLocaleDateString();
        const time = date1.toLocaleTimeString();    
        console.log(date2);
        console.log(time);
        return `${date2} ${time}`;
    }

 if (korisnik1){
    return (
        <div className='mojiTermini'> 
            <h1>MojiTermini</h1>
            {korisnik1.termini.map((termin) => (
                <div key={termin.id} className='mup'>
                    <p>MUP: {getMupName(termin.mupId)}</p>
                    <p>Vreme: {parseDateandTime(termin.vreme)}</p>
                    <p>Status: {termin.status.status}</p>
                    <p>TipDokumenta: {termin.tipDokumenta.tipDokumenta}</p>
                </div>
                        
                    ))}
        </div>
      )
 } 
}

export default MojiTermini