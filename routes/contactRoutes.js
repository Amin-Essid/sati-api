"use strict";
module.exports = function (app) {
  var contact = require("../controllers/contactController");

  // todoList Routes
  app.route("/contact/buy").post(contact.send_email);
  app.route("/contact/sell").post(contact.send_offer);

  //   app
  //     .route("/journals/:file")
  //     .get(journals.read_a_journal)
  //     .put(journals.update_a_journal)
  //     .delete(journals.delete_a_journal);
};
