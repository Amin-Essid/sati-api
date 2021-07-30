'use strict';


const mongoose = require('mongoose'),
Journal = mongoose.model('Journal');

exports.list_all_journals = function(req, res) {
    Journal.find({}, function(err, journal) {
    if (err)
      res.send(err);
    res.json(journal);
  });
};




exports.create_a_journal = function(req, res) {
  var new_journal = new Journal(req.body);
  new_journal.save(function(err, journal) {
    if (err)
      res.send(err);
    res.json(journal);
  });
};


exports.read_a_journal = function(req, res) {
    Journal.findById(req.params.taskId, function(err, journal) {
    if (err)
      res.send(err);
    res.json(journal);
  });
};


exports.update_a_journal = function(req, res) {
    Journal.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, journal) {
    if (err)
      res.send(err);
    res.json(journal);
  });
};


exports.delete_a_journal = function(req, res) {


    Journal.remove({
    _id: req.params.taskId
  }, function(err, journal) {
    if (err)
      res.send(err);
    res.json({ message: 'Journal successfully deleted' });
  });
};