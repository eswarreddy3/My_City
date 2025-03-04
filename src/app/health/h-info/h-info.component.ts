import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-h-info',
  templateUrl: './h-info.component.html',
  styleUrls: ['./h-info.component.css']
})
export class HInfoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<HInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onClose(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
