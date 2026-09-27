import {test} from '@playwright/test';
import { general } from '../lib/General';

test('add the employe ', async({page})=>{

    let obj = new general(page);
    await obj.login();
    await obj.stay();
    await obj.Enter_userid_password();
    await obj.stay();
    await obj.add_employe();
    await obj.stay();
    await obj.logout();
    await obj.stay();

    
})