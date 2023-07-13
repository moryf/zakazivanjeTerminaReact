class ClassName{
    constructor(id,ime,prezime,email,lozinka){
        this.id = id;
        this.ime = ime;
        this.prezime = prezime;
        this.email = email;
        this.lozinka = lozinka;
    }
    getId(){
        return this.id;
    }
    getIme(){
        return this.ime;
    }
    getPrezime(){
        return this.prezime;
    }
    getEmail(){
        return this.email;
    }
    getLozinka(){
        return this.lozinka;
    }
    setId(id){
        this.id = id;
    }
    setIme(ime){
        this.ime = ime;
    }
    setPrezime(prezime){
        this.prezime = prezime;
    }
    setEmail(email){
        this.email = email;
    }
    setLozinka(lozinka){
        this.lozinka = lozinka;
    }
    toString(){
        return this.id + " " + this.ime + " " + this.prezime + " " + this.email + " " + this.lozinka;
    }
    
}