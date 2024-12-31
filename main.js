const pakollinen = document.querySelectorAll('.pakollinen');
const varoitus = '<p style="color: red; font-size: 0.7rem;">Täytä tarvittavat tiedot!</p>';

function validoi() {
    pakolliset();
};

function pakolliset() {
    let pituus = pakollinen.length;
    let sukupuoli = document.querySelectorAll('input[name="sukupuoli"]:checked');
    let kieli = document.querySelectorAll('input[name="kieli"]:checked');
    let kayttaja = document.getElementById('kayttaja');
    let salasana = document.getElementById('sSana');
    let postinumero = document.getElementById('pNumero');
    let sahkoposti = document.getElementById('sPosti');
    let spostimuoto = /^[a-zåäöA-ZÅÄÖ0-9._%+-]+@[a-zåäöA-ZÅÄÖ0-9._%+-]+\.[a-zåäöA-ZÅÄÖ]{2,}$/;
    let maa = document.getElementById('maa');

    // Ensimmäinen tarkistus kaikille pakollisille kentille:

    for (let i = 0; i < pituus; i++) {
        if (pakollinen[i].value.length < 1) {
            pakollinen[i].placeholder = 'Täytä tarvittavat tiedot!';
            pakollinen[i].style.border = '2px solid red';
        } else {
            pakollinen[i].placeholder = '';
            pakollinen[i].style.border = '';
        };
    };

    // Käyttäjä ID:n tarkistus:

    if (kayttaja.value.length < 6) {
        kayttaja.style.border = '2px solid red';
        document.getElementById('kNimi').innerHTML = '<p style="color: red; font-size: 0.7rem;">Nimen on oltava vähintään 6 merkkiä pitkä!</p>';
    } else {
        document.getElementById('kNimi').innerHTML = '';
    };

    // Salasanan tarkistus:

    if (salasana.value.length < 6 || /[A-ZÅÄÖ]/.test(salasana.value) === false || /[0-9]/.test(salasana.value) === false || /[!@£$€&%#]/.test(salasana.value) === false ) {
        salasana.style.border = '2px solid red';
        document.getElementById('ssPituus').innerHTML = '<p style="color: red; font-size: 0.7rem;">Salasanan on oltava vähintään 6 merkkiä ja sisällettävä ainakin yksi iso kirjain, numero ja yksi erikoismerkeistä: !@£$€&%#</p>'
    } else {
        document.getElementById('ssPituus').innerHTML = ''
    };

    // Maan valinnan tarkistus:

    if (maa.selectedIndex === 0) {
        maa.style.border = '2px solid red';
    } else {
        maa.style.border = '';
    };
    
    // Postinumeron tarkistus:

    if (postinumero.value.length != 5 || isNaN(postinumero.value)) {
        postinumero.style.border = '2px solid red';
        document.getElementById('pNumeroVaroitus').innerHTML = '<p style="color: red; font-size: 0.7rem;">Postinumeron on oltava 5 numeroa pitkä!</p>';
    } else {
        document.getElementById('pNumeroVaroitus').innerHTML = '';
    };

    //Sähköpostin tarkistus:

    if (spostimuoto.test(sahkoposti.value) === false){
        sahkoposti.style.border = '2px solid red';
        document.getElementById('sPostiVaroitus').innerHTML = '<p style="color: red; font-size: 0.7rem;">Sähköposti ei ole oikean muotoinen!</p>';
    } else {
        document.getElementById('sPostiVaroitus').innerHTML = ''
    };

    // Sukupuolen valinnan tarkistus:

    if (sukupuoli.length < 1) {
        document.getElementById('sPuoliVaroitus').innerHTML = varoitus;
    } else {
        document.getElementById('sPuoliVaroitus').innerHTML = '';
    };

    // Kielen valinnan tarkistus:

    if (kieli.length < 1) {
        document.getElementById('kieliVaroitus').innerHTML = varoitus;
    } else {
        document.getElementById('kieliVaroitus').innerHTML = '';
    };
};