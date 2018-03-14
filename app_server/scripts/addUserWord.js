const inputUserValues = function(){

    db.word.save(
        [
            {word:inputWord, definition:inputDef}
        ]
    );

}