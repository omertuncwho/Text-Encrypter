document.addEventListener('DOMContentLoaded', function () {
    function encodeText(text) {
        return btoa(text);
    }

    const nonCryptedText = document.getElementById('non-crypted-text');
    const cryptedText = document.getElementById('crypted-text');
    const cryptButton = document.querySelector('.crypt');

    cryptButton.addEventListener('click', function () {
        const inputText = nonCryptedText.value;
        const encodedText = encodeText(inputText);
        cryptedText.value = encodedText;
    });
});
