let biodata = require('./modules/biodata.js')


console.log(`
    Nama: ${biodata.bio.nama}
    Tempat Lahir:  ${biodata.bio['tempat-lahir']}
    Tanggal Lahir: ${biodata.bio['tanggal-lahir']}
    Alamat: ${biodata.bio.alamat}
`)