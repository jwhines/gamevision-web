<script>
  import { API } from 'aws-amplify';
  import { createDevice } from './graphql/mutations';
  import { listDevices } from './graphql/queries';

  import { Authenticator } from '@aws-amplify/ui-vue';
  import '@aws-amplify/ui-vue/styles.css';


  export default {
    name: 'app',
    async created() {
      this.getDevices();
    },
    data() {
      return {
        name: '',
        screen: '',
        device_id: '',
        tricode: '',
        location: '',
        used_by: '',
        devices: []
      };
    },
    methods: {
      async createDevice() {
        const { name, screen, device_id, tricode, location, used_by } = this;
        if (!name || !screen) return;
        const device = { name, screen, device_id, tricode, location, used_by };
        this.devices = [...this.devices, device];
        await API.graphql({
          query: createDevice,
          variables: { input: device }
        });
        this.name = '';
        this.screen = '';
        this.device_id = '';
        this.tricode = '';
        this.location = '';
        this.used_by = '';
      },
      async getDevices() {
        const devices = await API.graphql({
          query: listDevices
        });
        this.devices = devices.data.listDevices.items;
      }
    }
  };
</script>
<!-- <script setup>
  import { Authenticator } from '@aws-amplify/ui-vue';
  import '@aws-amplify/ui-vue/styles.css';
</script>
<template>
  <authenticator>
    <template v-slot="{ user, signOut }">
      <h1>Hello {{ user.username }}!</h1>
      <button @click="signOut">Sign Out</button>
    </template>
  </authenticator>
</template> -->
<template>
  <div id="app">
    <h1>Device Gamevisionweb</h1>
    <input type="text" v-model="name" placeholder="Device name" />
    <input type="text" v-model="screen" placeholder="Device screen" />
    <input type="text" v-model="device_id" placeholder="Device Id" />
    <input type="text" v-model="tricode" placeholder="Tricode" />
    <input type="text" v-model="location" placeholder="Location" />
    <input type="text" v-model="used_by" placeholder="used by" />
    <button v-on:click="createDevice">Create Device</button>
    <div v-for="item in devices" :key="item.id">
      <h3>{{ item.name }}</h3>
      <p>{{ item.screen }}</p>
    </div>
  </div>
</template>