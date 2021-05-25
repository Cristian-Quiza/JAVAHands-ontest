import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service'
import { Employee } from '../employee';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[] | undefined;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((data: Employee[])=>{
      console.log(data);
      this.employees = data;
    });
  }

}
