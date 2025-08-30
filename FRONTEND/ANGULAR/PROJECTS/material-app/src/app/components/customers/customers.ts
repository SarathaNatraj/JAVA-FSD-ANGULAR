import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './customers.html',
  styleUrls: ['./customers.css']
})
export class Customers implements OnInit {
  customers: any[] = [];
  error: string | null = null;

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers() {
    const token = localStorage.getItem('jwt');
    if (!token) {
      this.error = '❌ No token found. Please login first.';
      return;
    }

    this.http.get<any[]>('http://localhost:3333/api/customers', {
      headers: { Authorization: `Bearer ${token}` }
    }).subscribe({
      next: (res) => {
        this.customers = res;
        this.error = null;
      },
      error: (err) => {
        console.error(err);
        this.error = '❌ Failed to load customers. (Invalid or expired token)';
      }
    });
  }
}
