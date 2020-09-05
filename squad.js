const squad = Handlebars.compile(
    document.querySelector('#squadTemplate').innerHTML
);

const squadInfos = [
    {
        number: "1", 
        name: "Manuel Neuer",
        birth: "27/03/1986",
        position: "Goalkeeper",
        nation: "German",
        pic:"https://i.pinimg.com/736x/8a/e9/1d/8ae91de111eb1c5afb8c1da83839384d.jpg",
        rowNum: "1",
    },
    {
        number: "6", 
        name: "Thiago",
        birth: "10/04/1991",
        position: "Central Midfielder",
        nation: "Spainish",
        pic:"https://www.thesun.co.uk/wp-content/uploads/2020/08/NINTCHDBPICT000598863010.jpg",
        rowNum: "1",
    },
    {
        number: "9", 
        name: "Robert Lewandowski",
        birth: "20/08/1988",
        position: "Striker",
        nation: "Polish",
        pic:"https://img.fcbayern.com/image/fetch/f_auto,h_880,q_auto:good,w_660/https://fcbayern.com/binaries/content/gallery/fc-bayern/homepage/saison-19-20/galerien/spiele/fcb-union-berlin/13_fcb-union_191026_get.jpg/13_fcb-union_191026_get.jpg/fcbhippo%3Alargeninetotwelve%3Fv%3D1572101462955",
        rowNum: "1",
    },
    {
        number: "19", 
        name: "Alphonso Davies",
        birth: "01/11/2020",
        position: "Left Back",
        nation: "Canadian",
        pic:"https://img.fcbayern.com/image/fetch/f_auto,h_880,q_auto:good,w_660/https://fcbayern.com/binaries/content/gallery/fc-bayern/homepage/saison-19-20/profis/davies/191211_davies_ima.jpg/191211_davies_ima.jpg/fcbhippo%3Alargeninetotwelve%3Fv%3D1578476315185",
        rowNum: "1",
    },
    {
        number: "22", 
        name: "Serge Gnabry",
        birth: "13/07/1995",
        position: "Right Winger",
        nation: "German",
        pic:"https://img.fcbayern.com/image/fetch/f_auto,h_880,q_auto:good,w_660/https://fcbayern.com/binaries/content/gallery/fc-bayern/homepage/saison-19-20/profis/gnabry/200613_gnabry_get.jpg/200613_gnabry_get.jpg/fcbhippo%3Alargeninetotwelve%3Fv%3D1594727321666",
        rowNum: "2",
    },
    {
        number: "25", 
        name: "Thomas Muller",
        birth: "12/09/1989",
        position: "Striker",
        nation: "German",
        pic:"https://staticg.sportskeeda.com/editor/2020/02/69e3a-15827383259800.jpg",
        rowNum: "2",
    },
    {
        number: "32", 
        name: "Joshua Kimmich",
        birth: "07/02/1995",
        position: "Right Back",
        nation: "German",
        pic:"https://img.fcbayern.com/image/fetch/f_auto,h_880,q_auto:good,w_660/https://fcbayern.com/binaries/content/gallery/fc-bayern/homepage/saison-19-20/profis/kimmich/200303_kimmich_ima.jpg/200303_kimmich_ima.jpg/fcbhippo%3Alargeninetotwelve%3Fv%3D1583276610979",
        rowNum: "2",
    },
    {
        number: "#", 
        name: "Hansi Flick",
        birth: "24/02/1965",
        position: "Coach",
        nation: "German",
        pic:"https://img.fcbayern.com/image/fetch/f_auto,h_880,q_auto:good,w_660/https://fcbayern.com/binaries/content/gallery/fc-bayern/homepage/saison-19-20/trainer/flick/191127_flick_ima.jpg/191127_flick_ima.jpg/fcbhippo%3Alargeninetotwelve%3Fv%3D1574849933575",
        rowNum: "2",
    },
]

for (let m of squadInfos) {
    if (m.rowNum === "1") {
        document.querySelector('#row1').innerHTML += squad({
            number: m.number,
            name: m.name,
            birth: m.birth,
            position: m.position,
            nation: m.nation,
            pic: m.pic,
        })
    } else {
        document.querySelector('#row2').innerHTML += squad({
            number: m.number,
            name: m.name,
            birth: m.birth,
            position: m.position,
            nation: m.nation,
            pic: m.pic,
        })
    }
}