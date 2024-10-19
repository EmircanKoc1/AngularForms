import { AfterViewInit, Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent implements OnInit {
  ngOnInit(): void {

  }


  @ViewChild("frm", { static: true }) frm!: NgForm;


  onSubmit(data: any): void {
    console.log(data);
    console.log(this.frm.value);
    console.log(this.frm.submitted);
    console.log(this.frm.touched);
    console.log(this.frm.valid);



  }

  formReset(): void {
    this.frm.reset();
  }

  formSetValue(): void {
    // this.frm.form.patchValue({
    //   Email: "setvaluemail"
    // });

    this.frm.control.patchValue({
      Email: "setvaluemail"
    });
  }

}
