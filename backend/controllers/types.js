const db=require("../config/database")
const Teacher  =db.Teacher 

module.exports = {

    getAllTypes : function(req, res) {
        const users=Types.findAll()
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(500).send("err");
        })},
    getOneTypes : function(req, res) {
        var userid=req.params.id
        types .findByPk(userid)
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(500).send("err");
        })


    },
    addTypes : function(req, res) {
    var add=req.body
    types .create(add)
    .then(users => {
        res.send(users);
    })
    .catch(err => {
        res.status(500).send("err");
    })

    },
    delitetypes :function (req,res){
        const id = req.params.id;

        Types .destroy({ where: { id: id } })
.then(users => {
    res.send(users);
})
.catch(err => {
    res.status(500).send("err");
})

    },

    updateTypes :function(req,res){
        const id = req.params.id;

        Types.update (req.body,{ where: { id: id } })
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(500).send("err");
        })



    }

}