
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pocetna from './Komponente/Pocetna';
import NavBar from './Komponente/NavBar';
import { useState } from 'react';
import Omiljeni from './Komponente/Omiljeni';
import Footer from './Komponente/Footer';
import TradicionalnaJela from './Komponente/TradicionalnaJela';

function App() {
 const [omiljenoJ,setOmiljenoJ]=useState([]);
  const[svaTradicionalnaJela]=useState([
{
  id:1,
  naziv:"Napolitanska pica",
  slika:"http://ocdn.eu/images/pulscms/MjM7MDA_/c8d058a3bc905f45c0f693e0538e7b8a.jpeg",
  opis:"Najbolja pica na svetu se pravi u Napulju. Ova pica je zaštićena od strane trgovinske asocijacije, a sastojci kao što su morska so, visokokvalitetno pšenično brašno, isključiva upotreba triju posebnih vrsta paradajza, ručno valjano testo i striktna upotreba peći na drva, su samo neke od odlika spremanja najukusnije pice na svetu.",
  drzava:"Italija",
  omiljeni:0
},
{
  id:2,
  naziv:"Suši",
  slika:"https://www.restoranibeograd.com/storage/news/interior/391/susi.jpg",
  opis:"Kada Japanci žele da naprave nešto kako treba, oni to odrade stvarno kvalitetno! Suši se sastoji iz dva suštinska dela: kuvanog pirinča sa dodatkom pirinčanog sirćeta (šari) i dodataka pirinču (neta). Neta dodaci (najčešće riba i morski plodovi), kao i oblik sušija mogu se dosta razlikovati; međutim, jedna stvar koju svi sušiji imaju je šari (pirinač sa sirćetom).",
  drzava:"Japan",
  omiljeni:0
},
{
id:3,
naziv:"Kebab",
slika:"https://www.thespruceeats.com/thmb/ao7czXh1afSBamtQnDUilsLD3uc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/doner-kebab-recipe-4171703-hero-01-c14d8b7189df4685a50bae311317f831.jpg",
opis:"U svetu postoji više vrsta kebaba, zavisi o čijoj kuhinji se radi. Iranski tip kebaba se naziva „Kebab Kenjeh“, veoma je popularan u Aziji, a poznat je širom sveta. Jagnjetina je tradicionalno meso koje se koristi u spremanju. Pored nje, za pripremanje iranskog kebaba se koriste i maslinovo ulje, limunov sok, so i biber. Uobičajeno se služi sa pirinčem, grilovanim paradajzom i crnim lukom.",
drzava:"Iran",
omiljeni:0

},
{id:4,
  naziv:"Hamburger",
  slika:"https://cdn.britannica.com/31/122031-050-F8FCA663/Hamburger-cheeseburger.jpg",
  opis:"Hamburger je naziv dobio po nemačkom gradu Hamburg, odakle je mnogo ljudi emigriralo za SAD, gde je i nastao 1890. godine. Hamburger predstavlja sendvič koji se sastoji od pljeskavice od mlevenog mesa smešten unutar hleba. Danas su različite vrste hamburgera izuzetno popularne i prodavane u lancima brze hrane.",
  datum:"SAD  ",
  omiljeni:0
},
{
  id:5,
naziv:"Meksička čokolada",
slika:"https://mojacokolada.com/wp-content/uploads/2018/01/Depositphotos_41719749_original-1140x540.jpg",
opis:"Meksička čokolada važi za najukusniju čokoladu na svetu! Sa ukusom cimeta, badema i vanile, ova čokolada ima mnogo zrnastiju teksturu nego druge čokolade. Od nje se prave mnogi popularni napici, kao što su meksički čampurado, toplo čokolada i čokoladni kolač.",
drzava: "Meksiko",
omiljeni:0
},
{
id:6,
naziv:"Penang laksa",
slika:"https://www.newmalaysiankitchen.com/wp-content/uploads/2017/09/Penang-Asam-Laksa-Sara-Khong-New-Malaysian-Kitchen.jpg",
opis:"Jedno od najpopularnijih jela u Maleziji je Penang asam laksa, ljuto-kisela riblja čorba sa rezancima (naročito kvalitetna u kombinaciji sa đumbirom). Ova čorba dotiče sva Vaša čula i nosi ukus koji ćete dugo pamtiti.",
drzava: "Malezija",
omiljeni:0
},
{
  id:7,
naziv:"Morska paelja",
slika:"https://www.milinkuvar.com/wp-content/uploads/2018/06/IMG_2187.jpg",
opis:"Paelja je jelo od pirinča koje se pojavilo u svom današnjem, modernom obliku sredinom devetnaestog veka, na istočnoj obali Španije, u Valensiji. Stranci vide Paelju kao špansko nacionalno jelo, međutim mnogi španci ističu da je to regionalno jelo Valensije. Naime, žitelji Valensije paelju ponosno smatraju jednim od simbola po kojem su poznati širom sveta.",
drzava:"Španija",
omiljeni:0
},
{
id:8,
naziv:"Masaman kari",
slika:"https://img.taste.com.au/eUVwa-YX/taste/2016/11/thai-massaman-beef-curry-101889-1.jpeg",
opis:"Tajlandska kuhinja je jedna od najboljih internacionalnih kuhinja na svetu, a njen glavni predstavnik je Masaman kari. Često se naziva kraljem svih karija, a verovatno predstavlja i kralja svih jela. Obično sadrži sledeće sastojke: kokosovo mleko, prženi kikiriki ili indijski orah, krompir, lovorovo lišće, kardamon, cimet, palmin šećer, riblji sos i čili sos.",
drzava:"Tajland",
omiljeni:0
},


]);

const [krterijumPretrage,setKriterijumPretrage]=useState("");

  function pretrazi(kriterijum){
    setKriterijumPretrage(kriterijum);
  }

  function dodaj(id){
    for(var i=0;i<svaTradicionalnaJela.length;i++){
      if(svaTradicionalnaJela[i].id==id){
        svaTradicionalnaJela[i].omiljeni=1;
      }
    }
    var niz = svaTradicionalnaJela.filter((f)=>f.omiljeni==1);
    setOmiljenoJ(niz);
}
function izbaci(id){
  for(var i=0;i<svaTradicionalnaJela.length;i++){
    if(svaTradicionalnaJela[i].id==id){
      svaTradicionalnaJela[i].omiljeni=0;
    }
  }
  var niz = svaTradicionalnaJela.filter((f)=>f.omiljeni==1);
  setOmiljenoJ(niz);
}

  return (
    <div>
      <BrowserRouter>
      <NavBar pretrazi={pretrazi}></NavBar>
      <Routes>
        <Route path="/" element={<Pocetna></Pocetna>}></Route>
        <Route path="/tradicionalnaJela" element={<TradicionalnaJela kriterijum={krterijumPretrage}  tradicionalnaJela={svaTradicionalnaJela} dodaj={dodaj}></TradicionalnaJela>}></Route>
        <Route path="/omiljeni" element={<Omiljeni kriterijum={krterijumPretrage}  tradicionalnaJela={omiljenoJ} izbaci={izbaci}></Omiljeni>}></Route>
      </Routes>
     
      </BrowserRouter>
      <Footer></Footer>
      </div>
  );
}

export default App;
