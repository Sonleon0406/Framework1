import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Inventor } from './entities/inventor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'FPT POLYTECHNIC';
  student = {
    hoten: 'Công Sơn',
    gioitinh: 'Nam',
    ngaysinh: '10/10/2004',
    diachi: 'Đà Nẵng',
    anh: 'nểu.jpg',
    diemtb: 9.5
  };

  inventors: Inventor[] = [
    { id: 1, first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { id: 2, first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { id: 3, first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { id: 4, first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { id: 5, first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { id: 6, first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { id: 7, first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { id: 8, first: 'Katherine', last: 'Hendricks', year: 1948, passed: null },
  ];


  ngAfterViewInit() {
    this.render((innerHTML: string) => this.show(innerHTML));
  }

  show(innerHTML: string) {
    const tbody = document.querySelector('#inventor tbody');
    if (tbody) {
      tbody.innerHTML = innerHTML;
    }
  }

  render(callback: (innerHTML: string) => void) {
    const innerHTML = this.inventors.map(inventor => {
      return `<tr>
        <td>${inventor.id}</td>
        <td>${inventor.first}</td>
        <td>${inventor.last}</td>
        <td>${inventor.year}</td>
        <td>${inventor.passed}</td>
      </tr>`;
    }).join('');

    callback(innerHTML);
  }
}

