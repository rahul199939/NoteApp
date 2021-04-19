import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {

  notes = [];
  recentNodeId = [];

  addNote(title, body) {
    this.notes.push([title, body])
  }

  getNote() {
    return this.notes;
  }

  deleteNote(id) {
    console.log("delete->"+id)
    this.notes.splice(id, 1)
  }

  getSingleNote(id) {       
    this.notes = this.getNote()
    let note = this.notes[id]
    note.push(id)
    this.recentNodeId.push(note)
  }

  removeAllRecentNote(){
    this.recentNodeId = []
  }

  updateNote(id,title,body){    
    this.notes = this.getNote()
    this.notes[id][0] = title
    this.notes[id][1] = body
  }
  constructor() { }
}
