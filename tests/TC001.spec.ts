import { general } from "../lib/General";
import { test } from "@playwright/test";

test('Enter the login and password', async({page})=>{

    let obj = new general(page);
   await obj.login();
   await obj.Enter_userid_password();
   await obj.logout();
   console.log("Test case execution is completed")
});
