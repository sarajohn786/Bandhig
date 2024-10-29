
const rotate = document.querySelector('.rotate')
const fiiri = document.querySelector('.fiiri')
let qoutes = [
    { text: "Inta Dumar simanee ,Saadirku uumay,Suuradiyo Quruxda Lasiiyay,Siman Adigaa uwacanoo,Sadrigaad ku taal,Sina kuuma daayo." },
    { text: ' Haduu qofku xanaaqo marka la-canaanto, waa calaamad sheegaysa inuu canaantaas mudnaa.' },
    { text: "waxaan saatir kuu qorin ha u suuldhabaaleyn.Kala saar run iyo been.Kala garo sir iyo caad. In salaaddu waligeed kala tahay Sunne iyo Faral, u ogow Sax iyo Maan" },
    { text: "Baadida nin baa kula daydaya , daalna kaa badane. Oo aan doonayn inaa heshaa , daa'im abidkaaye.Dadkuna moodin , duul wada dhashoo wax u dahsooneen" },
    { text: "Samaatada ninkii raadiya ee sebanno gaajooda.Safrad iyo baqool iyo lug iyo suudi iyo guure.Saldho adag wxay kaagasho iyo surin ciriiryoonba.Mar uun buu ILAAH siinayaa oo uu midigta saaraa. Hayeeshee saansaanbay rabtaa sidaas markay tahay " },
    { text: "Tartan weeye duniduye, latallaabso qayrkaa.Aakhirana u tacabdhigo ,yay adduunyo kula tagin.Tirso ruuxa kuu tura.Dadka kii wax kugu tara,lama tiro abaalkii. Saaxiibka toosani, waa tiirka guushee, haka tagin samaha guud." },
    { text: "Ifka waxaan ku dheehdaa labadaada dhaayood.Haddii aan dharaar ahay , qorraxdii dhashaa tahay." },
    { text: "Dhadhan malaha Aadmigu , wuxuu kugu dhaliilaaye.Nin dharbaaxa quureed dugsaday,dhaqanyadeed maalye.Dhashaaday sugtaaa, Xaajaad dhawrataa abide" },
    { text: "Caqlig saxanbaad hablaha,adigu ugu tahay suldaan.Sifada Garashada dadnimo,qofaan kula simo majiro " },
    { text: "Geenyo weeye udgoonoo,Garashiyo Qurux u dhalatay,Gacal weeye ,Edaab lahoo,Gobonnimo ku caan baxday,Gardarada mataqaan oo, Guri Boqortooyey ku Nooshay" }

]

// console.log(qoutes)
// array da iyo obj kala furfuraynaaa
// WUXUUNA KUU SOO BANDHIGAYAA OBGJIGA TEXTIGIISA OO UU ARRAY CUSUB KU SHUBI DOONAA
// const data = qoutes.map(qoute => qoute.text)
// console.log(data) 

// WUXUU SOO SAARAYAA XABBADA U HORRAYSA BAS
// console.log(data[(Math.floor(Math.random() * Array.length))])

// ARRAYDA WAXA KU JIRA BUU MID MID KUUGU SOO DOORAYAA
// function sootuur(mn,mx){
//     return Math.random() * (mx - mn) +mn;
// }
// function testy(){
//     console.log(data[(Math.floor(sootuur(1,11)))-1])
// }
// testy()

function list() {
    // WAA XOGTA AAN KOR KU QORTAY
    // console.log(qoutes)
    // KOW ARRAYDA IYO OBJECTIGA BAAN KALA SAARAYNAA
    // WUXAANA KUU SOO BANDHIGAYAA OBGJIGA TEXTIGIISA OO AAN ARRAY CUSUB KU SHUBI DOONAA
    const data = qoutes.map(qoute => qoute.text)
    // console.log(data)
    // HADDABA TEXTIGII OO BILAA ARRAY AH AYAAN BANNAANKA USOO SAARAY
    for (let i = 0; i < data.length; i++) {
        // console.log(data[i])
        const d = data[i]
        // console.log(d)

    }

    // ARRAYDA WAXA KU JIRA BUU MID MID KUUGU SOO DOORAYAA
    function sootuur(mn, mx) {
        return Math.random() * (mx - mn) + mn;
    }
    function testy() {
        const fake =(data[(Math.floor(sootuur(11, 1))) - 1])
        console.log(fake)


        fiiri.textContent =fake
    }
    testy()
}
// list()

// const kill = list()
// fiiri = kill 
// console.log(fiiri)
document.addEventListener('DOMContentLoaded', function () {

    rotate.addEventListener('click',function(){
        list()
    })
})
