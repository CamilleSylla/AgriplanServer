
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, title: 'muscle up your brain', user_id: 3},
        {id: 2, title: 'What a good grass over here', user_id: 1},
        {id: 3, title: 'mala is a lil bit ridiculous', user_id: 2}
      ]);
    });
};
