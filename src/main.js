import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { Amplify, PubSub } from 'aws-amplify';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

PubSub.subscribe(['sp-test-topic']).subscribe({
    next: data => console.log('Message received', data),
    error: error => console.error(error),
    complete: () => console.log('Done'),
});

createApp(App).mount('#app')


