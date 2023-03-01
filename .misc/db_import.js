// ----------------------------
// Collection structure for directors
// ----------------------------
db.getCollection('directors').drop();
db.createCollection('directors');

// ----------------------------
// Documents of directors
// ----------------------------
db.getCollection('directors').insert([
  {
    _id: ObjectId('63bd2e5b761acb1e840043d2'),
    name: 'Quentin Tarantino',
    age: NumberInt('55'),
  },
]);
db.getCollection('directors').insert([
  {
    _id: ObjectId('63bd2e5b761acb1e840043d3'),
    name: 'Michael Radford',
    age: NumberInt('72'),
  },
]);
db.getCollection('directors').insert([
  {
    _id: ObjectId('63bd2e5b761acb1e840043d4'),
    name: 'James McTeigue',
    age: NumberInt('51'),
  },
]);
db.getCollection('directors').insert([
  {
    _id: ObjectId('63bd2e5b761acb1e840043d5'),
    name: 'Guy Ritchie',
    age: NumberInt('50'),
  },
]);

// ----------------------------
// Collection structure for movies
// ----------------------------
db.getCollection('movies').drop();
db.createCollection('movies');

// ----------------------------
// Documents of movies
// ----------------------------
db.getCollection('movies').insert([
  {
    _id: ObjectId('63bd2f0e761acb1e840043d6'),
    name: 'Pulp Fiction',
    genre: 'Crime',
    directorId: ObjectId('63bd2e5b761acb1e840043d2'),
  },
]);
db.getCollection('movies').insert([
  {
    _id: ObjectId('63bd2f0e761acb1e840043d7'),
    name: '1984',
    genre: 'Sci-Fi',
    directorId: ObjectId('63bd2e5b761acb1e840043d3'),
  },
]);
db.getCollection('movies').insert([
  {
    _id: ObjectId('63bd2f0e761acb1e840043d8'),
    name: 'V for vendetta',
    genre: 'Sci-Fi-Triller',
    directorId: ObjectId('63bd2e5b761acb1e840043d4'),
  },
]);
db.getCollection('movies').insert([
  {
    _id: ObjectId('63bd2f0e761acb1e840043d9'),
    name: 'Snatch',
    genre: 'Crime-Comedy',
    directorId: ObjectId('63bd2e5b761acb1e840043d5'),
  },
]);
db.getCollection('movies').insert([
  {
    _id: ObjectId('63bd2f0e761acb1e840043da'),
    name: 'Reservoir Dogs',
    genre: 'Crime',
    directorId: ObjectId('63bd2e5b761acb1e840043d2'),
  },
]);
db.getCollection('movies').insert([
  {
    _id: ObjectId('63bd2f0e761acb1e840043db'),
    name: 'The Hateful Eight',
    genre: 'Crime',
    directorId: ObjectId('63bd2e5b761acb1e840043d2'),
  },
]);
db.getCollection('movies').insert([
  {
    _id: ObjectId('63bd2f0e761acb1e840043dc'),
    name: 'Inglourious Basterds',
    genre: 'Crime',
    directorId: ObjectId('63bd2e5b761acb1e840043d2'),
  },
]);
db.getCollection('movies').insert([
  {
    _id: ObjectId('63bd2f0e761acb1e840043dd'),
    name: 'Lock, Stock and Two Smoking Barrels',
    genre: 'Crime-Comedy',
    directorId: ObjectId('63bd2e5b761acb1e840043d5'),
  },
]);
