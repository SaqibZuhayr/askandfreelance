import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements AfterViewInit, OnDestroy {
  @ViewChild('cardInfo') cardInfo: ElementRef;

  card: any;
  cardHandler = this.onChange.bind(this);
  error: string;
  emailAddress: string;

  constructor(private cd: ChangeDetectorRef, private http: HttpClient) {
  }

  ngAfterViewInit() {
    this.card = elements.create('card');
    this.card.mount(this.cardInfo.nativeElement);

    this.card.addEventListener('change', this.cardHandler);
  }

  ngOnDestroy() {
    this.card.removeEventListener('change', this.cardHandler);
    this.card.destroy();
  }

  onChange({error}) {
    if (error) {
      this.error = error.message;
    } else {
      this.error = null;
    }
    this.cd.detectChanges();
  }

  asd() {
    window.open('https://connect.stripe.com/oauth/authorize?response_type=code&' +
      'client_id=ca_32D88BD1qLklliziD7gYQvctJIhWBSQ7&scope=read_write&redirect_uri=https://saqibzuhayr.github.io/', '_blank');
  }

  async onSubmit(form: NgForm) {
    const {token, error} = await stripe.createToken(this.card, {
      email: this.emailAddress
    });
    if (token) {
      console.log(token.id);
    }
    this.http.post('http://localhost:3000/payment', {id: token.id})
      .subscribe((data) => {
        console.log(data);
      });

    if (error) {
      console.log('Something is wrong:', error);
    } else {
      console.log('Success!', token);
      // ...send the token to the your backend to process the charge
    }
  }
}
