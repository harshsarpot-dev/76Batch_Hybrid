import { global } from "./Global";

export class general extends global{

    async login(){
        await this.page.goto(this.url);
        console.log("user can see the login page ");

    }
    async Enter_userid_password(){
        await this.page.locator(this.username_field).fill(this.username);
        await this.page.locator(this.password_field).fill(this.password);
        await this.page.locator(this.login_button).click();
        console.log("user successfully login")
    }
    async logout(){
        await this.page.locator(this.logout_button).click();
        console.log("user sucessfully logout");
    }

    async add_employe(){
        const frame = this.page.frameLocator(this.frame_employelist);
        await frame.locator(this.add_button).click();
        await frame.locator(this.firstname_field).fill(this.first_name);
        await frame.locator(this.lastname_field).fill(this.last_name);
        await frame.locator(this.save_button).click();
        console.log("Employe add succesfully")

    }
    async stay(){
        await this.page.waitForTimeout(2000);

    }

}