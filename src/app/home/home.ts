import { Component } from '@angular/core';
import { Header } from "../header/header";
import { About } from "../about/about";
import { Service } from "../service/service";
import { Testimonials } from "../testimonials/testimonials";
import { Contact } from "../contact/contact";
import { Footer } from "../footer/footer";

import { Hero } from "../hero/hero";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule,Header, About, Service, Testimonials, Contact, Footer, Hero],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
