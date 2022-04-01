import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../services/users.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers?: User[]

  constructor(private readonly usersService: UsersService) { }

  ngOnInit(): void {
    this.getAllCustomer()
  }

  getAllCustomer() {
    this.usersService.getAllUser().subscribe(
      (data) => {
        this.customers = data
      }
    )
  }
}
