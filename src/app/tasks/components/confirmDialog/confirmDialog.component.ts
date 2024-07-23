import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Task } from '../../interfaces/taks.interface';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirmDialog.component.html',
})
export class ConfirmDialogComponent {

    constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  onConfirm():void {
    this.dialogRef.close(true)
  }

}
