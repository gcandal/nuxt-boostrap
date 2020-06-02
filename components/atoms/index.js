import { Logo } from "./logo/logo.vue";

const install = Vue => {
    Vue.component("logo", Logo);
};

export { Logo };

export default install;
