import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-note-detail',
  standalone: true,
  templateUrl: './note-detail.page.html',
  styleUrls: ['./note-detail.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
})
export class NoteDetailPage {}
