import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
// import {mimeType} from '../questions/mimetype.validator';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-add-gigs',
  templateUrl: './add-gigs.component.html',
  styleUrls: ['./add-gigs.component.css']
})
export class AddGigsComponent implements OnInit {
nform: FormGroup;
  imagePreview ;
  constructor(public route: ActivatedRoute, private http: HttpClient) { }
  ngOnInit() {
    this.nform = new FormGroup({
      image: new FormControl(null, {
        // asyncValidators: [mimeType]
      })
    });
  }
  onAddGig(form: NgForm) {
    console.log(form.value);
    console.log(this.nform.value.image);
    this.http.post('http://localhost:3000/addgig', {'gig': form.value,
      'image': this.imagePreview,
      'userid': localStorage.getItem('userid')
      })
      .subscribe((data) => {
      console.log(data);
    });;
  }


  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];;
    this.nform.patchValue({ image: file});
    this.nform.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      // @ts-ignore
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(file);

  }
}
