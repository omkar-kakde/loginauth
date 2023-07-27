import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../servcies/users.service';
import { Iuser } from '../../model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private service : UsersService) { }
  userObj !: Array<Iuser>
  ngOnInit(): void {
    this.getUserData()
  }


  getUserData(){
    this.userObj = this.service.getAllData()
    console.log(this.userObj);
    
  }
}
