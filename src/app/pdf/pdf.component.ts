import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      window.print();
    },1000);
    
  }
  downloadPDF(){
    console.log('downloading pdf ...');
     
const doc =new jsPDF();
 
doc.text('    CONTRAT DE PARTENARIAT', 15, 15,
);

doc.save('contrat.pdf')
 
  }
}
