const fs = require('fs')

// addNote
//version1
/*const addNote = (title,body) =>{
    const notes = loadNotes() // []  //  [{title:"test",body:"body"}]
    console.log(notes)
    notes.push({   // [{title:'test',body:'new'}] ,  [{title:"test",body:"body"},{{title:"test1",body:"body1"}}]
        title,
        body
    })
    saveNotes(notes)
}*/
/////////////////////////////////////////////////
//version2
const addNotes =(title,body) =>{
    const notes = loadNotes(); //[] // {{title:"test",body:"body"}}
    const duplicateTitles = notes.filter((notes) =>{
        //title1 === titel2 F
        //titel2 === titel2 T
        ///////////////////////////////////
        //title1 (srored file)  === title 1(input terminal)  T
        //title1 === title2 f
        //title2 === title2 t
        return notes.title === title;
    });
    console.log(duplicateTitles);
    if (duplicateTitles.lenght == 0){
        //consol.log(notes)
        notes.push({
            //[{title:'test',body:'new'}] , [{title:'test',body:'body}] , [{}]
            title,
            body,
        })
    }
}
const loadNotes = () =>{
    try{
        // [{"title":"test","body":"body"}]
    const dataBuffer = fs.readFileSync('notes.json').toString() // json
    // [{title:"test",body:"body"}]
    return JSON.parse(dataBuffer)
    }
    catch(e){
        return []
    }
}

const saveNotes = (notes) =>{
    console.log(notes)
    // [{title:'test',body:'new'}] --> [{"title":'test',"body":'new'}]
    //  [{"title":"test","body":"body"},{{"title":"test1","body":"body1"}}]
    const saveData = JSON.stringify(notes)
    console.log(saveData)
    fs.writeFileSync('notes.json',saveData)
}

module.exports = {
    addNote
}