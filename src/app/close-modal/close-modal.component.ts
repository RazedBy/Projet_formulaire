import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-close-modal',
  templateUrl: './close-modal.component.html',
  styleUrls: ['./close-modal.component.css']
})
export class CloseModalComponent {

  constructor(private MatDialog : MatDialog){

  }

  onNo(){
    this.MatDialog.closeAll()
  }

  onYes(){
    
  }
}
