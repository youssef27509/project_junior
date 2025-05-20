const db=require("../config/database")
const name =db.name

module.exports = {

    getAllName: function(req, res) {
        const users=name.findAll()
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(500).send("err");
        })},
    getOneName: function(req, res) {
        var userid=req.params.id
        name.findByPk(userid)
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(500).send("err");
        })


    },
    addName: function(req, res) {
        var hello=req.body
        name.create(hello)
         .then(users => {
                res.send(users);
            })
            .catch(err => {
                res.status(500).send(err);
            });

    },
    deliteName:function (req,res){
        const id = req.params.id;

        name.destroy({ where: { id: id } })
.then(users => {
    res.send(users);
})
.catch(err => {
    res.status(500).send("err");
})

    },

    updateName:function(req,res){
        const id = req.params.id;

        name.update (req.body,{ where: { id: id } })
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(500).send("err");
        })



    }

}