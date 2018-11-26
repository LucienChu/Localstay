<template>
    <b-card>
    <form-wizard @on-complete="onComplete">
        <tab-content title="Location"
                    icon="ti-user">
            <location :parentData="myData" v-on:nextForm="toLocation"></location>
        </tab-content>
        <tab-content title="Details"
                    icon="ti-settings">
        My second tab content
        </tab-content>
        <tab-content title="Book property assessment"
                    icon="ti-check">
        Yuhuuu! This seems pretty damn simple
        </tab-content>
    </form-wizard>
    <p>{{fromLocation}}</p>
    </b-card>

</template>

<script>
import location from "../components/Location.vue"
export default {
    components: {
        "location": location,
    },
    data: () => {
        return {
            fromLocation: '',
            fromDetail: '',
        }
    },
    methods: {
        onComplete: function(){
            alert('Yay. Done!');
        },
        toLocation(value)
        {
            this.fromLocation = value;
        },
        toDetail(value)
        {
            this.fromDetail = value;
        }
    }
  }
</script>