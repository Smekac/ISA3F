import {Component, OnInit} from '@angular/core';
import {NewProp} from '../../models/prop';
import {PropService} from '../prop.service';
import {Korisnik} from '../../models/korisnik';

@Component({
  selector: 'app-new-prop-list',
  templateUrl: './new-prop-list.component.html',
  styleUrls: ['./new-prop-list.component.css']
})
export class NewPropListComponent implements OnInit {

  result: any;
  newProps: NewProp[];
  korisnik: Korisnik;
  newProp: NewProp;

  constructor(private propService: PropService) {
    this.korisnik = JSON.parse(localStorage.getItem('ulogovaniKorisnik'));
    // this.newProp.registrovaniKorisnik = this.korisnik;

  }

  ngOnInit() {
    this.propService.getNewPropsAll().subscribe(    // getNewProps()
      (data: NewProp[]) => {
        this.newProps = data;
      },
      err => console.error(err),
      () => console.log('Ucitaj ga ljebati  .....')
    );
  }

  reservation(id: number) {
    // this.result = this.propService.reservation(id);
    // console.log(' Da ulzi ovdeee ....' + this.result);
    //  this.newProp.registrovaniKorisnik = this.korisnik; trebalo bi ga poslati da bi se setovvalo i kad bi bio post
    this.propService.reservation(id)
      .subscribe(resp => {
        if (resp.status) {
          //  alert('Uspesno ste rezervisali rekvizit!');
          window.location.reload();
        } else {
          alert('Nije uspela rezervacija');
        }
        console.log('Hajmo deckii: ' + resp.status);
      });
  }


}
