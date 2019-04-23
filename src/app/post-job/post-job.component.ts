import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {
  degree = '0';
  career = '0';
  experience = '0';
  userid = ' ';

  constructor(private route: Router, private http: HttpClient) {
  }

  ngOnInit() {
    this.userid = localStorage.getItem('userid');
  }

  onPostJob(form: NgForm) {
    if (form.invalid) {
      return;
    }
    if (!localStorage.getItem('userid')){
      swal("Login Required", "", "error");
      return;
    }
    this.http.post('http://localhost:3000/postjobs', {'job':  form.value, 'userid': this.userid })
      .subscribe((data) => {
        swal("Posted", "Job is posted", "success");
        this.route.navigate(['main/jobs']);
      });
    console.log(form.value);
  }

  onBack() {
    this.route.navigate(['/main/jobs']);
  }
}

