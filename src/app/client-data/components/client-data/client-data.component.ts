import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-data',
  templateUrl: './client-data.component.html',
  styleUrls: ['./client-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientDataComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: new FormControl('', [Validators.required]),
      desc: new FormControl('', [Validators.required])
    })
  }

  /**
   * On Save
   * @return void 
   */
  public onSave(cb: any): void {
    const { value, valid } = this.form;
    if (valid) {
      cb();
    }
  }
}
