<template>
  <div class="blog-admin-menu">

    <el-menu  default-active="2-1">

      <el-menu-item index="1">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">文章管理</template>
        <el-menu-item index="2-1" @click="adminArticleLink()">文章</el-menu-item>
        <el-menu-item index="2-2" @click="adminTypeLink()">类型</el-menu-item>
        <el-menu-item index="2-3" @click="adminTagLink()">标签</el-menu-item>
      </el-submenu>
    </el-menu>

  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component({
    components: {}
  })
  export default class BlogAdminMenu extends Vue {
	private navIndex = '1';


   public adminArticleLink() {
      this.$router.push({name:'adminArticleLink'});
    }
    public adminTypeLink() {
      this.$router.push({name:'adminTypeLink'});
    }
    public adminTagLink() {
      this.$router.push({name:'adminTagLink'});
    }
  }
</script>

<style lang="scss" scoped>
  .blog-admin-menu {
    width: 200px;
    padding: 0;
    position: absolute;
    top: 0;
    bottom: 0;
  }

  .el-menu {
    width: 200px;
    /*margin-top: 100px;*/
  }

  .el-submenu {
    width: 200px;
  }

  .el-menu-item {
    width: 200px;
  }

  .blog-admin-menu a {

  }
</style>
