var alpha = /[^A-Za-z]/;
document.getElementById('btn').addEventListener('click', function() {

var str1 = (document.getElementById('str1').value).replace(alpha, ''),
    str2 = (document.getElementById('str2').value).replace(alpha, '');

var isAnagram = str1.length > 0 && str1.length === str2.length && (str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join(''));

 
alert('Is Anagram: ' + isAnagram);
}, false);
