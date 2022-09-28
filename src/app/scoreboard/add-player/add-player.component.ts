import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent implements OnInit {

  constructor(public fb : FormBuilder, private _location: Location) { }

  public registerForm: FormGroup = this.fb.group({
    nom : ["Doe", Validators.required],
    prenom : ["John", Validators.required],
    vitesse : ["151 cpm", Validators.required],
    temps : ["Il y a 57 minutes", Validators.required],

})

  showMsg: boolean = false;

  ngOnInit(): void {
  }

  public submit()
  {
    if(this.registerForm.invalid){
      console.log(this.registerForm);
    }else{
        let localScore = localStorage.getItem("listScore");
        if (localScore){
          let listScore = JSON.parse(localScore);
          if (Array.isArray(listScore)){
            let local = this.registerForm.value;
            local["id"] = listScore.length;
            listScore.push(this.registerForm.value);
            localStorage.setItem("listScore", JSON.stringify(listScore));
            this.showMsg = true;
          }
        }else{
          localStorage.setItem("listScore", JSON.stringify([this.registerForm.value]))
        }
    }
    console.log(this.registerForm.value);
  }

  public previousPage()
  {
    this._location.back();
  }
}
