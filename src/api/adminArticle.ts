/**
 * 文章管理相关Api
 */
import BaseApi from '@/api/baseApi';

export default class AdminArticleApi extends BaseApi {

  public static putImg(data: any) {
    const url = 'admin/upload/uploadFile';
    return super.filePost(data, url);
  }

  /**
   * 发布文字 - md编辑器
   */
  public static publishMd(data: any) {
    const url = 'admin/article/publish';
    return super.post(data, url);
  }

  /**
   * get
   * @param data
   */
  public static get(data: any) {
    const url = 'admin/article/get';
    return super.get(data, url);
  }

  /**
   * get
   * @param data
   */
  public static getAsEdit(data: any) {
    const url = 'admin/article/getAsEdit';
    return super.get(data, url);
  }

  /**
   * query
   * @param data
   */
  public static query(data: any) {
    const url = 'admin/article/query';
    return super.post(data, url);
  }

  /**
   * remove
   */
  public static remove(data: any) {
    const url = 'admin/article/remove';
    return super.fromPost(data, url);
  }

  /**
   * update 评论设置
   */
  public static comment(data: any) {
    const url = 'admin/article/comment';
    return super.fromPost(data, url);
  }

  /**
   * update 置顶设置
   */
  public static top(data: any) {
    const url = 'admin/article/top';
    return super.fromPost(data, url);
  }
}
