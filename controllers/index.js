const { Woof } = require('../models')

class Controller{
  static home(req, res){
    Woof.findAll()
      .then(woofs => {
        res.render('home', {woofs})
      })
      .catch(err => res.send(err))
  }

  static post(req, res){
    const {name, woof} = req.body
    const input = {name, woof}
    Woof.upsert(input)
      .then(res.redirect('/'))
      .catch(err=>res.send(err))
  }

  static wow(req, res){
    const wowId = +req.params.id
    Woof.increment('wow', { where: { id:wowId } })
      .then(res.redirect('/'))
      .catch(err=>res.send(err))
  }

  static unwow(req, res){
    const wowId = req.params.id
    Woof.decrement('wow', { where: { id:wowId } })
      .then(res.redirect('/'))
      .catch(err=>res.send(err))
  }
}

module.exports = Controller