var convertBtn = document.querySelector('.convert-button');

convertBtn.addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        let url = tabs[0].url;
        let format = document.querySelector('input[name="format"]:checked').id;
        sendURL(url,format)
    })
});
function sendURL(URL, FORMAT) {
    window.location.href = `http://myt-downloader.herokuapp.com/download?URL=${URL}&FORMAT=${FORMAT}`;
}