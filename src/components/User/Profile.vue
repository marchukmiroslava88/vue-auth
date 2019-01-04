<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <h1 class="blue-grey--text">Profile</h1>
      </v-flex>
      <v-flex xs4>
        <v-img class="pointer"
                src="https://getstamped.co.uk/wp-content/uploads/WebsiteAssets/Placeholder.jpg"
        ></v-img>
      </v-flex>
      <v-flex xs8 px-4>
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
</style>