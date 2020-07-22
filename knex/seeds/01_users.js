
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Camille', email: 'cam@email.com'},
        {id: 2, name: 'Agathe', email: 'agathe@email.com'},
        {id: 3, name: 'François', email: 'francois@email.com'}
      ]);
    });
};
