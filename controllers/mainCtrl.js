var user = require('../models/user.js')
var skillz = require('../skillz.js')
var secrets = require('../secrets.js')

 module.exports = {
   getName: function(req, res) {
     res.status(200).json(user.name)
   },
   getLocation: function(req,res) {
     res.status(200).json(user.location)
   },
   getOccupations: function(req,res) {
     res.status(200).json(user.occupations)
   },
   getLatestOccupation: function(req, res) {
     var latest = user.occupations.slice(user.occupations.length - 1, user.occupations.length);
     res.status(200).json(latest);
   },
   getHobbies: function(req, res) {
     res.status(200).json(user.hobbies)
   },
   getHobbiesType: function(req, res)  {
     var typeArr = [];
       for(var i = 0; i < user.hobbies.length; i++) {
         if(user.hobbies[i].type === req.params.type) {
           typeArr.push(user.hobbies[i]);
         }
       }
     res.status(200).json(typeArr);
   },
   getFamily: function (req, res) {
     if (req.query.relation) {
       var relation = req.query.relation;
       var relationArr = [];
       for (var i = 0; i < user.family.length; i++) {
         if(relation === user.family[i].relation){
           relationArr.push(user.family[i])
         }
       }
       res.status(200).json(relationArr)
     } else {
       res.status(200).json(user.family)
     }
   },
   getFamilyGender: function(req, res) {
  //    var gendArr = [];
  //      for(var i = 0; i < user.family.length; i++) {
  //        if(user.family[i].gender === req.params.gender) {
  //          gendArr.push(user.family[i]);
  //        }
  //      }
  //    res.status(200).json(gendArr);
  //  },
    var newArr = user.family.filter(value => {
      if (value.gender === req.params.gender) {
        return value;
      }
    })
    res.json(newArr);
  },
   getRestaurant: function (req, res) {
     if(req.query.rating) {
       var rating = (req.query.rating) / 1;
       var ratingArr = [];
       for(var i = 0; i < user.restaurants.length; i++) {
           if(user.restaurants[i].rating >= rating && rating > 2) {
             ratingArr.push(user.restaurants[i])
           }
         }
         res.status(200).json(ratingArr)
     } else {
       res.status(200).json(user.restaurants)
     }
   },
   getRestaurantName : function (req, res) {
     var RestaurantsFilter = user.restaurants.filter(function (value) {
       if ( req.params.name === value.name) {
         return value;
       }
     })
     res.status(200).json(RestaurantsFilter);
   },
  //  getRestaurantName: function (res, req) {
  //    var name = req.params.name;
  //    var nameArr = []
  //    res.status(200).json(name)
  //  }
  putName: function (req,res) {
    user.name = req.body.name;
    res.status(200).end();
  },
  putLocation: function (req, res) {
    user.location = req.body;
    res.status(200).end();
  },
  postHobbies: function (req, res) {
    user.hobbies.push(req.body);
    res.status(200).end()
  },
  postOccupations: function (req, res) {
    user.occupations.push(req.body);
    res.status(200).end();
  },
  postFamily: function(req,res) {
    user.family.push(req.body);
    res.status(200).end();
  },
  postRestaurants: function (req, res) {
    user.restaurants.push(req.body);
    res.status(200).end();
  },
  getSkillz: function (req, res) {
    if(req.query.experience) {
      var skillArr = [];
      var skill = req.query.experience;
      for(var i = 0; i < skillz.skill.length; i++) {
        if(skill === skillz.skill[i].experience) {
          skillArr.push(skillz.skill[i])
        }
      }
      res.status(200).json(skillArr)
    } else {
      res.status(200).json(skillz.skill)
    }
  },
  postSkillz: function (req, res) {
    var newSkillObj =
    {
      "id":req.body.id,
      "name": "new Skill",
      "experience": "LoE"
    }
    skillz.skill.push(newSkillObj);
    res.status(200).end()
  },
  getSecrets: function (req, res) {
    res.status(200).json(secrets.secret)
  }

 }
