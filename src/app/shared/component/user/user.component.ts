import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iuser } from '../../model/user';
import { UsersService } from '../../servcies/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
 userId !: number
 userObj !: Iuser
  constructor(private activate : ActivatedRoute ,
       private service : UsersService ,
       private router : Router
    ) { }

  ngOnInit(): void {

     this.activate.params
           .subscribe(
            (id:Params)=> {
              this.userId = +id['id']
              console.log(this.userId)}
           )

           this.userObj = this.service.getSingleUser(this.userId)!
           console.log(this.userObj);
           
  }
   

  onEdit(){
    this.router.navigate(['users', this.userId , 'edit'],{
      queryParamsHandling:'preserve'
    })
  }
}
