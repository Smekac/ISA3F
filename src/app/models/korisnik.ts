export class Korisnik {
  username: string;
  password: string;
  ime: string;
  prezime: string;
  email: string;
  grad: string;
  number: string;
  adminFan: boolean;
  tipKorisnika: string;
}

export class Prijatelj {
  id: number;
  kor: Korisnik;
  prijatelj: Korisnik;
  status: string;
}
