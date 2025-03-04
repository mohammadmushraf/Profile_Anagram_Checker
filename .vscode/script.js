document.addEventListener("DOMContentLoaded", function () {
    
    document.querySelector("button").addEventListener("click", checkAnagram);
});

function checkAnagram() {
    let word1 = document.getElementById("word1").value.toLowerCase().replace(/\s/g, '');
    let word2 = document.getElementById("word2").value.toLowerCase().replace(/\s/g, '');

    if (!word1 || !word2) {
        document.getElementById("result").innerText = " Please enter both words.";
        return;
    }

    let sortedWord1 = word1.split('').sort().join('');
    let sortedWord2 = word2.split('').sort().join('');

    if (sortedWord1 === sortedWord2) {
        document.getElementById("result").innerText = "The words are anagrams!";
    } else {
        document.getElementById("result").innerText = "Not anagrams!";
    }
}
