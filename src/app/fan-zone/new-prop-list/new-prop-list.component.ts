import {Component, OnInit} from '@angular/core';
import {NewProp} from '../../models/prop';
import {PropService} from '../prop.service';

@Component({
  selector: 'app-new-prop-list',
  templateUrl: './new-prop-list.component.html',
  styleUrls: ['./new-prop-list.component.css']
})
export class NewPropListComponent implements OnInit {

  result: any;
  newProps: NewProp[];

  constructor(private propService: PropService) {
  }

  ngOnInit() {
    this.propService.getNewPropsAll().subscribe(    //getNewProps()
      (data: NewProp[]) => {
        this.newProps = data
      },
      err => console.error(err),
      () => console.log('Ucitaj ga ljebati  .....')
    );
  }

  reservation(id: number) {
    // this.result = this.propService.reservation(id);
    // console.log(' Da ulzi ovdeee ....' + this.result);
    this.propService.reservation(id)
      .subscribe(resp => {
        if (resp.status) {
          alert('Uspesno ste rezervisali rekvizit!');
          window.location.reload();
        } else {
          alert('Nije uspela rezervacija');
        }
        console.log('Ispisii deckoo' + resp.status);
      });
  }


}
