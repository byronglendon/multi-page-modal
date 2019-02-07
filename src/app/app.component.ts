import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ModalLandingComponent } from 'src/app/modal.components/modal-landing/modal-landing.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'multi-page-modal';
  closeResult: string;

  constructor(private modalService: NgbModal, private router: Router) {}

  openLanding() {
    this.router.navigate(['/', { outlets: { popup: 'modal-landing-page'}}])
    this.modalService.open(ModalLandingComponent).result
    .then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.router.navigate(['/', { outlets: { popup: null}}]);
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
