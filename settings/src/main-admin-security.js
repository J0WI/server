import Vue from 'vue'

import AdminTwoFactor from './components/AdminTwoFactor.vue'

__webpack_nonce__ = btoa(OC.requestToken)

Vue.prototype.t = t;

// Not used here but required for legacy templates
window.OC = window.OC || {};
window.OC.Settings = window.OC.Settings || {};

const View = Vue.extend(AdminTwoFactor)
new View().$mount('#two-factor-auth-settings')
