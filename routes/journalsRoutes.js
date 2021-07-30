'use strict';
module.exports = function(app) {
  var journals = require('../controllers/journalsController');

  // todoList Routes
  app.route('/journals')
    .get(journals.list_all_journals)
    .post(journals.create_a_journal);


  app.route('/journals/:journalId')
    .get(journals.read_a_journal)
    .put(journals.update_a_journal)
    .delete(journals.delete_a_journal);
};