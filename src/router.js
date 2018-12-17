import Vue from "vue";
import Router from "vue-router";
import Intro from "@/views/Intro.vue";
import Home from "@/views/Home.vue";
import Generic from "@/views/Generic.vue";
import Elements from "@/views/Elements.vue";

import HeaderHome from "@/components/HeaderHome.vue";
import HeaderOther from "@/components/HeaderOther.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
            path: "/",
            name: "home",
            components: {
                default: Home,
                'intro': Intro,
                'header': HeaderHome
            }
        },
        {
            path: "/generic",
            name: "generic",
            components: {
                default: Generic,
                'header': HeaderOther
            }
        },
        {
            path: "/elements",
            name: "elements",
            components: {
                default: Elements,
                'header': HeaderOther
            }
        }
    ]
});