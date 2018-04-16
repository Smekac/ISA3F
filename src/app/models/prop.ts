import {Korisnik} from './korisnik';

export class UsedProp {
  id: number;
  naslov: string;
  opis: string;
  dateCreated: string;
  activeUntil: string;
  status: string;
  acceptedBid: boolean;
  adminFan: number;
 // registrovaniKorisnik: number;
  registrovaniKorisnik: Korisnik;
  image: string;
  createdDate: string;
}
export class NewProp {
  id: number;
  naslov: string;   // tittle
  opis: string;
  dateCreated: string;
  price: number;
  adminFan: number;
  registeredUser: number;
  registrovaniKorisnik: Korisnik;
  show: number;
  image: string;
  createdDate: string;
}
export class Bid {
  id: number;
  price: number;
  registrovaniKorisnik: Korisnik;
  dateCreated: Date;
}

export class Ustanova {
  id: number;
  name: string;
  type: string;
  address: string;
  description: string;
  rating: number;
}
