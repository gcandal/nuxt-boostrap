import Atoms from "./atoms";
import Molecules from "./molecules";
import Organisms from "./organisms";

const install = Vue => {
    Vue.use(Atoms);
    Vue.use(Molecules);
    Vue.use(Organisms);
};

export * from "./atoms";
export * from "./molecules";
export * from "./organisms";

export default install;
