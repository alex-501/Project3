const db = require("../models");

module.exports = {

  getInfo(req, res) {
    if (!req.user) {
      return res.status(401).end();
    }
    db.Household.findOne({
      where: { id: req.user.HouseholdId },
      include: db.User,
    })
      .then(household => {
        return res.json({
          name: household.name,
          invite_code: household.invite_code,
          members: household.Users.map(user => ({ id: user.id, name: user.name, color: user.color }))
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).end();
      });
  },

  findMembers(req, res) {
    db.User.findAll({ where: { HouseholdId: req.user.HouseholdId } })
      .then(data => res.json(
        data.map((row) => ({
          id: row.dataValues.id,
          name: row.dataValues.name,
          color: row.dataValues.color,
        }))
      ))
      .catch(err => {
        console.log(err);
        res.status(500).end();
      });
  },

  getInviteCode(req, res) {
    db.Household.findOne({ where: { id: req.query.id } })
      .then(data => res.json(data.invite_code))
      .catch(err => {
        console.log(err);
        res.status(500).end();
      });
  },

  joinHousehold(req, res) {
      if (!req.user) {
        return res.status(401).end();
      }
      db.Household.findOne({ where: { invite_code: req.query.invite } })
        .then(household => {
          if (!household) {
            res.status(403).end(); 
          } else {
            db.User.update({
              HouseholdId: household.id,
            }, {
              where: { id: req.user.id }
            })
              .then(() => {
                res.status(200).end();               })
              .catch(err => {
                console.log(err);
                res.status(500).end();});
          }
        })
        .catch(err => {
          console.log(err);
          res.status(500).end(); });
  }
}
