
import React from 'react'
import {useState,useEffect} from 'react';
import axiosConfig from '../../axiosConfig';


function MojiTermini() {
    const [korisnik,setKorisnik] = useState(null);
    const korisnik1 = JSON.parse(localStorage.getItem('korisnik'));
    const [termini,setTermini] = useState(korisnik1.termini);

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

            var naziv = response.data.naziv;
            console.log(naziv);
            return String(naziv);
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
    function getTermini(vrednost){
            if(vrednost === 'zakazani'){
                setTermini(korisnik1.termini.filter(termin => termin.status.status === 'Zakazan'));
            }
            else if(vrednost === 'zahtevi'){
                setTermini(korisnik1.termini.filter(termin => termin.status.status === 'Zahtev'));
            }
            else{
                setTermini(korisnik1.termini);
            }
            console.log(termini);
    }  




 if (korisnik1){
    return (
        <div className='mojiTermini'> 
            <h1>MojiTermini</h1>
            <div className='mupovi'>
                <select id="filter" defaultValue={"sve"}>
                    <option value="sve">Svi termini</option>
                    <option value="zakazani">Zakazani</option>
                    <option value="zahtevi">Zahtevi</option>
                </select>
                <button onClick={()=>getTermini(document.getElementById("filter").value)}>Pretrazi</button>
            {termini.map((termin) => (
                <div key={termin.id} className='mup'>
                    <p>MUP: {getMupName(termin.mupId)}</p>
                    <p>Vreme: {parseDateandTime(termin.vreme)}</p>
                    <p>Status: {termin.status.status}</p>
                    <p>TipDokumenta: {termin.tipDokumenta.tipDokumenta}</p>
                </div>
                        
                    ))}
            </div>
        </div>
      )
 } 
}

export default MojiTermini