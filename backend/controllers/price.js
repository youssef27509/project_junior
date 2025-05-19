const db=require("../config/database")
const price =db.price

module.exports = {

  getAllPrice: function(req, res) {
      const users=price.findAll()
      .then(users => {
          res.send(users);
      })
      .catch(err => {
          res.status(500).send("err");
      })},
  getOnePrice: function(req, res) {
      var userid=req.params.id
      price.findByPk(userid)
      .then(users => {
          res.send(users);
      })
      .catch(err => {
          res.status(500).send("err");
      })


  },
  addPrice: function(req, res) {
  var add=req.body
  price.create(add)
  .then(users => {
      res.send(users);
  })
  .catch(err => {
      res.status(500).send("err");
  })

  },
  delitePrice:function (req,res){
      const id = req.params.id;

      price.destroy({ where: { id: id } })
.then(users => {
  res.send(users);
})
.catch(err => {
  res.status(500).send("err");
})

  },

  updatePrice:function(req,res){
      const id = req.params.id;

      price.update (req.body,{ where: { id: id } })
      .then(users => {
          res.send(users);
      })
      .catch(err => {
          res.status(500).send("err");
      })



  }

}