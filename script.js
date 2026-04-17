<script>
// LIST OF ADS
const ads = [
    {
        img: "https://via.placeholder.com/300x600?text=Ad+1",
        link: "https://example.com"
    },
    {
        img: "https://via.placeholder.com/300x600?text=Ad+2",
        link: "https://google.com"
    },
    {
        img: "https://via.placeholder.com/300x600?text=Ad+3",
        link: "https://youtube.com"
    }
];

// FUNCTION TO PICK RANDOM AD
function getRandomAd() {
    return ads[Math.floor(Math.random() * ads.length)];
}

// UPDATE ADS
function updateAds() {
    const leftAd = getRandomAd();
    const rightAd = getRandomAd();

    document.getElementById("adImageLeft").src = leftAd.img;
    document.getElementById("adLinkLeft").href = leftAd.link;

    document.getElementById("adImageRight").src = rightAd.img;
    document.getElementById("adLinkRight").href = rightAd.link;
}

// INIT + AUTO ROTATE
updateAds();
setInterval(updateAds, 30000); // every 30 seconds
</script>