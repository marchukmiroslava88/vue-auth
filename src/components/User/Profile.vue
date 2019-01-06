<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 mb-4>
        <h1 class="blue-grey--text">Profile</h1>
      </v-flex>
      <v-flex flex md3 sm4 offset-sm0 xs8 offset-xs2 mb-4>
        <v-img class="pointer user-photo"
                src="https://getstamped.co.uk/wp-content/uploads/WebsiteAssets/Placeholder.jpg"
        ></v-img>
      </v-flex>
      <v-flex flex md6 sm8 xs12 px-4>
        <div class="mb-4 blue-grey--text">
          <div class="border-bottom text-uppercase">Contact Information</div>
          <div class="border-bottom py-2">Email: {{email}}</div>
          <div class="border-bottom py-2">
            <span class="pointer blue--text">+ Add phone</span>
          </div>
          <div class="border-bottom py-2">
            <span class="pointer blue--text">+ Add address</span>
          </div>
        </div>
        <div class="mb-4 blue-grey--text">
          <div class="border-bottom text-uppercase">GENERAL INFORMATION</div>
          <div class="border-bottom py-2">
            <span class="pointer blue--text">+ Add birthday</span>
          </div>
          <div class="border-bottom py-2">
            <span class="pointer blue--text">+ Add social network</span>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        email: localStorage.email
      }
    }
  }
</script>
<style scoped>
  .border-bottom{
    border-bottom: 1px solid #dddfe2;
  }
  .pointer{
    cursor: pointer;
  }
  .user-photo{
    height: 160px;
    width: 160px;
    border-radius: 100%;
    margin: auto;
  }
</style>