import {Component, OnInit} from '@angular/core';
import {PropService} from '../../prop.service';
import {NewProp, Ustanova} from '../../../models/prop';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-new-prop',
  templateUrl: './edit-new-prop.component.html',
  styleUrls: ['./edit-new-prop.component.css']
})
export class EditNewPropComponent implements OnInit {

  newProp: NewProp;
  shows: Ustanova[];
  selectedShowId: number;

  constructor(private propService: PropService, private router: Router) {
    this.newProp = new NewProp();
  }

  ngOnInit() {
    this.getShows();
  }

  getShows() {
    this.propService.getShows().subscribe((data: Ustanova []) => {
        this.shows = data;
      },
      err => {
        alert('Nije uspelo preuzimanje bioskopa/pozorista, mozda ne postoji ni jedan u bazi.');
      });
  }

  // editProp() {
  //   this.propService.editNewProp(this.newProp, this.selectedShowId)
  //     .subscribe((data: NewProp) => {
  //         this.newProp = data;
  //       },response => {
  //         alert('Uspesno izmenjen rekvizit!');
  //         // this.router.navigate(['adminfan/new-props-config']);
  //       });
  // }

}
