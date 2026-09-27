import {Page} from '@playwright/test';

export class global{
    constructor(public page : Page){

    }

    /****************** Login data  */
    public url : string        = "https://sureshitacademy.in/hrms/login.php";
    public username : string   = "sureshit";
    public password : string   = "sureshit";
    public first_name : string = "Harsh";
    public last_name : string  = "Sarpot";


    /***************** object and element */

    public username_field : string = "//input[@name='txtUserName']";
    public password_field : string = "//input[@name='txtPassword']";
    public login_button : string   = "//input[@name='Submit']";
    public logout_button : string  = "//a[@href='./index.php?ACT=logout']";
    public frame_employelist : string   = "//iframe[@name='rightMenu']";
    public firstname_field : string     = "//input[@name='txtEmpFirstName']";
    public lastname_field : string      = "//input[@name='txtEmpLastName']";
    public add_button : string          = "//input[@value='Add']";
    public save_button : string         = "//input[@id='btnEdit']";


}