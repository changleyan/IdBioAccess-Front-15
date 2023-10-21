import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.scss']
})
export class GroupFormComponent implements OnInit {
  groupForm!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<GroupFormComponent>,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  save() {
    if (this.groupForm.valid) {
      this.dialogRef.close(this.groupForm.value);
    }
  }

  private initForm() {
    this.groupForm = this.fb.group({
      name: ['', Validators.required],
      permissions: [[]]
    });
    if (this.data.group) {
      this.groupForm.patchValue(this.data.group);
    }
  }
}
