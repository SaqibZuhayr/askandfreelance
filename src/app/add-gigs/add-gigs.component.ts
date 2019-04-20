import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
// import {mimeType} from '../questions/mimetype.validator';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-add-gigs',
  templateUrl: './add-gigs.component.html',
  styleUrls: ['./add-gigs.component.css']
})
export class AddGigsComponent implements OnInit {
nform: FormGroup;
  imagePreview ;
  constructor(public route: ActivatedRoute, public router: Router, private http: HttpClient) { }
  ngOnInit() {
    this.nform = new FormGroup({
      image: new FormControl(null, {
        // asyncValidators: [mimeType]
      })
    });
  }
  onAddGig(form: NgForm) {
    if (form.invalid) {
      return;
    }
    if (!localStorage.getItem('userid')){
      alert('LOGIN REQUIRED');
      return;
    }
    console.log(form.value);
    console.log(this.nform.value.image);
    this.http.post('http://localhost:3000/addgig', {'gig': form.value,
      'image': this.imagePreview,
      'userid': localStorage.getItem('userid'),
      'username': localStorage.getItem('username')
      })
      .subscribe((data) => {
      console.log(data);
    });
  }


  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.nform.patchValue({ image: file});
    this.nform.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      // @ts-ignore
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(file);

  }

  onBack() {
    console.log('asdasd');
    this.router.navigate(['/main/userprofile']);
  }
}
