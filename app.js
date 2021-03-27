// console.log(1+2)
// alert('Hello world')
// confirm('Confirm')

//variabel dalam js
//var let cons
// let a = 10
// let b =5
// let c = a+b
// console.log(c)
// Date()
// let tanggal = Date()
// alert(tanggal)

// document.getElementById('nama').innerHTML="Kiki"
// document.getElementById('nama').style.color= "Red"
// document.getElementById('nama')

// function sayhello(){
//     alert('Ini function')
// }
// let clickme = document.getElementById('click-me')

// clickme.addEventListener('click', function nama()
// {
//     alert('click berhasil')
// })
var today = new Date();
var hari = "Tahun: "+ today.getFullYear() + " Bulan: " + today.getMonth() +" Hari: "+ today.getDate();
var time = "Jam(jam:menit:detik): " +today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
document.getElementById("TANGGAL").innerHTML = hari;
document.getElementById("JAM").innerHTML = time;
