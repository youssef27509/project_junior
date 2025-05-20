const db=require("../config/db")
const plants =db.plants

module.exports = {

    getAllplants: function(req, res) {
        const users=plants.findAll()
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(500).send("err");
        })},
    getOneplants: function(req, res) {
        var userid=req.params.id
        plants.findByPk(userid)
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(500).send("err");
        })


    },
    addplants: function(req, res) {
        var hello=req.body
        plants.create(hello)
         .then(users => {
                res.send(users);
            })
            .catch(err => {
                res.status(500).send(err);
            });

    },
    deliteplants:function (req,res){
        const id = req.params.id;

        plants.destroy({ where: { id: id } })
.then(users => {
    res.send(users);
})
.catch(err => {
    res.status(500).send("err");
})

    },

    updateplants:function(req,res){
        const id = req.params.id;

        plants.update (req.body,{ where: { id: id } })
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(500).send("err");
        })



    }

}