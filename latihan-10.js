function panggilobject() {
    var mahasiswa = {
        nama: "sameul",
        ipk: 2.7,
        prodi: "Sains Data"
    }
    for (var x in mahasiswa) {
        console.log(mahasiswa[x])
    }
}
panggilobject()