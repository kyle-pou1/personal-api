var user = {
  name: 'Kyle',
  location: 'Provo, UT',
  occupations: ['Balla', 'Tech', 'Man', 'student'],
  hobbies: [
    {
      name: 'Sports',
      type: 'recreation'
    },
    {
      name: 'coding',
      type: 'professional'
    },
    {
      name: 'Movies',
      type: 'recreation'
    }
  ],
  family: [
    {
      name: 'Shannon',
      relation: 'mother',
      gender: 'female'
    },
    {
      name: 'Olivia',
      relation: 'Sister',
      gender: 'female'
    },{
      name: 'Dennis',
      relation: 'father',
      gender: 'male'
    }
  ],
  restaurants: [
    {
      name: 'Bubba Gump Shrimp Co.',
      type: 'SeaFood',
      rating: '7'
    },
    {
      name: 'Great Steak',
      type: 'Steak Restaurant',
      rating: '9'
    },
    {
      name: 'Chili',
      type: 'American',
      rating: '3'
    },
    {
      name: 'Arbys',
      type: 'Fast-Food',
      rating: '1'
    }
  ]
}

module.exports = user;
