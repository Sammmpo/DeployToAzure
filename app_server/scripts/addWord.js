db.dropDatabase();

db.word.save(
    [
        {word:'dank', definition:'Also an expression requently used by stoners and hippies for something of high quality.'},
        {word:'kek', definition:'Kek literally translates to lol on World of Warcraft. When someone from the Horde side types lol in /say, members of the alliance side see kek instead. Not specific to Orcs.'},
        {word:'MLG', definition:'Major League Gaming. Eat doritos, drink Mountain Dew. Stuff is good in MLG.'}
    ]
);

// db.word.save(
//     [
//         {word:inputWord, definition:inputDef}
//     ]
// );