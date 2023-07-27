import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iuser } from 'src/app/shared/model/user';
import { UsersService } from 'src/app/shared/servcies/users.service';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.scss']
})
export class UsereditComponent implements OnInit {
userId !: number
userObj ! : Iuser
qp !: string
  constructor(private activate : ActivatedRoute,
       private service : UsersService,
       private router : Router
    ) { }

  ngOnInit(): void {
    this.activate.params
         .subscribe(
          (id:Params)=> {
          this.userId = +id['id']
          console.log(this.userId)
          }
         )
         this.userObj = this.service.getSingleUser(this.userId)!
         console.log(this.userObj);
         

         this.activate.queryParams
              .subscribe(
                (qp:Params) => {
                  this.qp = qp['canEdit']
                  console.log(qp);      
                }
            )

  }

  updateObj(username:HTMLInputElement,userId:HTMLInputElement){

    let obj : Iuser = {
      username : username.value,
      userId : this.userId,
      userRole : this.userObj.userRole
    }
    this.service.update(obj)
this.router.navigate(['/users'])
  }

}
