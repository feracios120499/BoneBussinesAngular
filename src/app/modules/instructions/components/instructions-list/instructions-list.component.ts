import { Component, ChangeDetectionStrategy } from '@angular/core';

interface Instruction {
  title: string;
  svgName: string;
  url: string;
}

@Component({
  selector: 'app-instructions-list',
  templateUrl: './instructions-list.component.html',
  styleUrls: ['./instructions-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InstructionsListComponent {
  instructions: Instruction[] = [
    {
      title: 'aside.nav.UserManualWeb',
      svgName: 'instruction-website',
      url: 'assets/doc/User_Manual.htm',
    },
    {
      title: 'aside.nav.UserManualMobile',
      svgName: 'instruction-mobile',
      url: 'assets/doc/User_Manual_Mobile.htm',
    },
    {
      title: 'BarsCryptor.Cloud',
      svgName: 'instruction-cloud',
      url: 'assets/barsCryptorCloud/BarsCryptorCloud_User_Manual.htm',
    },
    {
      title: 'components.instructions.reissueOfTheCertificate',
      svgName: 'instruction-certificate',
      url: 'http://ca.oschadbank.ua/storage/app/media/doc/GenCertInstr.pdf',
    },
  ];
}
