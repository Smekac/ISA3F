import {Component, OnInit} from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
import {PropService} from '../../prop.service';
import {NewProp, Ustanova} from '../../../models/prop';

@Component({
  selector: 'app-create-new-prop',
  templateUrl: './create-new-prop.component.html',
  styleUrls: ['./create-new-prop.component.css']
})
export class CreateNewPropComponent implements OnInit {
  shows: Ustanova[];
  newProp: NewProp;
  selectedShowId: number;
  newPropId: number;

  constructor(private propService: PropService, private  router: Router, private aRoute: ActivatedRoute) {
    this.newProp = new NewProp();
  }

  ngOnInit() {
    this.getShows();
    this.aRoute.params.subscribe(params => {
      this.newPropId = params['id'];
    });
    if (this.newPropId) {
      this.getNewProp();
    }
  }

  getShows() {
    this.propService.getShows().subscribe((data: Ustanova []) => {
        this.shows = data;
      },
      err => {
        alert('Nije uspelo preuzimanje bioskopa/pozorista, mozda ne postoji ni jedan u bazi.');
      });
  }

  createProp() {
    this.propService.createNewProp(this.newProp, this.selectedShowId)
      .subscribe(response => {
        if (response.status === 201) {
          alert('Uspesno kreiran rekvizit!');
          window.history.back();
        } else {
          alert('Doslo je do greske');
        }
      });
  }

  getNewProp() {
    this.propService.getNewProp(this.newPropId)
      .subscribe((data: NewProp) => {
          this.newProp = data;
        },
        error1 => {
          alert('Doslo je do greske, nije moguca izmena');
          this.router.navigate(['adminfan/new-props-config']);
        });
  }

  editProp() {
    //   console.log("______________ broj je:   " +  broj )
    this.propService.editNewProp(this.newProp, this.selectedShowId)
      .subscribe(response => {
          alert('Uspesno izmenjen rekvizit!');
          //   this.router.navigate(['adminfan/new-props-config']);
        },
        err => {
          alert('Doslo je do greske');
        });
  }
}
