const card = Handlebars.compile(
    document.querySelector('#cardTemplate').innerHTML
);

const cardLinks = [
    {
        title: "Treble 2019-2020",
        link: "https://www.footyheadlines.com/2020/08/bayern-munich-2020-champions-league-and-treble-collections.html",
        pic: "https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/Paris-Saint-Germain-v-Bayern-Munich---UEFA-Champio-f29cf975e1f12e68d0beda21158c646d.jpg",
    },
    {
        title: "Treble 2012-2013",
        link: "https://www.wikiwand.com/en/2012%E2%80%9313_FC_Bayern_Munich_season",
        pic: "https://i.ytimg.com/vi/rnnoiC3tvmo/maxresdefault.jpg",
    },
    {
        title: "Bayern 1973-1976",
        link: "https://www.uefa.com/uefachampionsleague/news/0253-0d7ff546eab3-5cb419e6b81a-1000--the-greatest-teams-of-all-time-bayern-1973-76/?referrer=%2Fuefachampionsleague%2Fnews%2Fnewsid%3D2252711",
        pic: "https://i.imgur.com/dVxl6Rx.jpg",
    },
    {
        title: "More Honors",
        link: "https://fcbayern.com/en/club/honours/all-honours",
        pic: "https://fcbayern.com/binaries/content/gallery/fc-bayern/homepage/club/erfolge/meisterschaft/1969_header.jpg",
    },
]

for (let c of cardLinks) {
    document.querySelector('#cardSection').innerHTML += card({
        title: c.title,
        link: c.link,
        pic: c.pic,
    });
}

