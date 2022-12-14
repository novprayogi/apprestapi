"use strict";

module.exports = function (app) {
  var jsonku = require("./controller");

  app.route("/").get(jsonku.index);

  // alurnya buat koneksi ke db pake koneksi.js kemudian buat controller untuk menghubungkn setelahnya di init di routes
  // crud mahasiswa REST API
  app.route("/tampilmhs").get(jsonku.tampilsemuamahasiswa);
  app.route("/tampilmhs/:id").get(jsonku.tampilidmahasiswa);
  app.route("/create").post(jsonku.tambahMahasiswa);
  app.route("/edit").put(jsonku.ubahMahasiswa);
  app.route("/delete").delete(jsonku.hapusMahasiswa);

  // menampilkan group dalam routes
  app.route("/tampilmatakuliah").get(jsonku.tampilGroupMatakuliah);
};
