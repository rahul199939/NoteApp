import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { NoteServiceService } from '../note-service.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  @Input() title:String;
  @Input() body:String;

  @Output('delete') deleteNote: EventEmitter<void> = new EventEmitter<void>()
  constructor(private noteServices: NoteServiceService) { }

  ngOnInit(): void {
  }
  deleteNotes(){
    this.deleteNote.emit()
  }
}
