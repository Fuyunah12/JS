let newName = prompt('de o nome pra vc')
let p1 = window.document.getElementById('p1')

p1.innerHTML =  `<p> Seu nome é <strong>${newName}</strong><p><br> Seu nome tem <strong> ${newName.length}<strong> Letras.`
p1.style.fontSize =  "18pt"