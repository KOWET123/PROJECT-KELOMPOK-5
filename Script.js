
function toggleMenu() {
    document.getElementById("navbar")
    .classList.toggle("active");
}

function cariMateri() {
    let input = document.getElementById("search")
    .value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {
        let nama = card.innerText.toLowerCase();

        card.style.display = nama.includes(input)
            ? "block" : "none";
    });
}

function lihatMateri(nama) {
    let penjelasan = {
        "Pemrograman Web":
        "Pemrograman web adalah proses membuat website menggunakan HTML, CSS, dan JavaScript.",

        "Basis Data":
        "Basis data adalah kumpulan informasi yang disimpan dan dikelola secara terstruktur.",

        "Bahasa Indonesia":
        "Bahasa Indonesia mempelajari keterampilan membaca, menulis, berbicara, dan menyimak.",

        "Jaringan Komputer":
        "Jaringan komputer adalah hubungan antara dua atau lebih komputer untuk berbagi informasi."
    };

    alert(nama + "\n\n" + penjelasan[nama]);
}

function tambahTugas() {
    let input = document.getElementById("taskInput");
    let list = document.getElementById("taskList");

    if (input.value.trim() === "") {
        alert("Masukkan tugas terlebih dahulu!");
        return;
    }

    let li = document.createElement("li");
    let item = document.createElement("div");
    item.className = "task-item";

    let nama = document.createElement("span");
    nama.textContent = input.value;

    let hapus = document.createElement("button");
    hapus.textContent = "Hapus";

    hapus.onclick = function() {
        li.remove();
    };

    item.appendChild(nama);
    item.appendChild(hapus);
    li.appendChild(item);
    list.appendChild(li);

    input.value = "";
}
