<script setup>
</script>

<template>
  <!-- <div class="background">
    <header>header</header>
    <aside>aside</aside>
    <main>main</main>
    <footer>footer</footer>
  </div> -->
  <el-row class="background">
    <el-col class="header" :xs="8" :sm="6" :md="4" :lg="3" :xl="1">header</el-col>
    <el-col class="aside" :xs="8" :sm="6" :md="4" :lg="3" :xl="1">aside</el-col>
    <el-col class="main" :xs="8" :sm="6" :md="4" :lg="3" :xl="1">main</el-col>
    <el-col class="footer" :xs="8" :sm="6" :md="4" :lg="3" :xl="1">footer</el-col>
  </el-row>
</template>

<style scoped lang="scss">
.background {
  width: 100%;
  height: 100vh;
  background-color: #ffa;

  .header {
    background-color: #d35252;
  }

  .aside {
    background-color: #1b138b;
  }

  .main {
    background-color: #fae;
  }

  .footer {
    background-color: #90a;
  }
}
</style>
