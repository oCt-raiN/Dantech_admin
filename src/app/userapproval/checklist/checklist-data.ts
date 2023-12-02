export interface clinicdata {
  name: string;
  email: string;
  phonenumber: string;
  address: string;
  city: string;
  state: string;
  banknumber: string;
  ifsc: string;
  bankbranch: string;
  gst: string;
}

export const clinicdat: clinicdata[] = [
  {
    name: 'Rajan clinic',
    email: 'example@gmail.com',
    phonenumber: '98765432123',
    address: '4, new street',
    city: 'chennai',
    state: 'Tamilnadu',
    banknumber: 'QWE234567890',
    ifsc: 'ERT12345678',
    bankbranch: 'Chennai',
    gst: '1234AS',
  },
];
