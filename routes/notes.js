var express = require('express');

var routes = express.Router();
var Notes = require('../models/notes');

routes.get('/', async(req, res  ) => {
    try{
        var notes = await Notes.find();
        res.json(notes);
    } catch(err){
        res.send('Error ' + err);
    }
});

routes.get('/:id', async(req, res  ) => {
    try{
        var note = await Notes.findById(req.params.id);
        res.json(note);
    } catch(err){
        res.send('Error ' + err);
    }
});

routes.post('/', async(req, res) => {
    var note = new Notes({
        name: req.body.name,
        tech: req.body.tech,
        subs: req.body.subs
    });

    try{
        var n1 = await note.save();
        res.json(n1);
    }catch(err){
        res.send('Error' + err);
    }
})

routes.patch('/:id', async(req, res) => {
    try {
        var note = await Notes.findById(req.params.id);
        note.subs = req.body.subs;
        var n1 = await note.save();
        res.json(n1);
    } catch ( err) {
        res.send('Error ' + err);
    }
})

routes.delete('/:id', async(req, res) => {
    try {
        var note = await Notes.findById(req.params.id);
        var n1 = await note.delete();
        res.json(n1);
    } catch (err) {
        res.send('Error ' + err)
    }
})

module.exports = routes;

