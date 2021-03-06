import { VuexModule, Module, MutationAction, Mutation, Action, getModule } from 'vuex-module-decorators';

import LoginApi from '@/api/login';
import store from '@/store/store';
import { UserInfoBean } from '@/bean/UserInfoBean';
import LocalStorageUtil from '@/utils/localStorageUtil';

export interface IUserState {
  username: string;
  userType: number;
  isLogin: boolean;
}

@Module({dynamic: true, store, name: 'user'})
export class User extends VuexModule implements IUserState {
  public username = '';
  public userType = 0;
  public isLogin = false;

  @Action
  public async Login(loginForm: { username: string, password: string }) {
    return await LoginApi.login(loginForm);
  }

  @Action
  public async UserInfo(userInfoBean: UserInfoBean) {
    userInfoBean.isLogin = true;
    this.SET_USER_INFO(userInfoBean);

    LocalStorageUtil.setItem(LocalStorageUtil.USER_INFO, JSON.stringify(userInfoBean));
  }

  @Action
  public async LoadUserInfo() {
    let userInfo: UserInfoBean = new UserInfoBean();
    const userInfoStr: any = LocalStorageUtil.getItem(LocalStorageUtil.USER_INFO);
    if (userInfoStr) {
      userInfo = JSON.parse(userInfoStr);
    } else {
      this.INIT_USER_INFO();
    }
    this.SET_USER_INFO(userInfo);
  }

  @Mutation
  public async INIT_USER_INFO() {
    this.username = '';
    this.userType = 0;
    this.isLogin = false;
  }

  @Mutation
  private SET_USER_INFO(userInfoBean: UserInfoBean) {
    this.username = userInfoBean.username;
    this.userType = userInfoBean.userType;
    this.isLogin = userInfoBean.isLogin;
  }

}

export const UserModule = getModule(User);
