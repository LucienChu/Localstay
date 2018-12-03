<template>
    <b-card style="margin-top: 100px">
        <b-form>
            <form-wizard @on-complete="onComplete">
                <tab-content title="Location"
                            icon="ti-user">
                    <form-location v-on:childToParentAddress="toLocation" />
                </tab-content>
                <tab-content title="Details"
                            icon="ti-settings">
                    <form-detail v-on:childToParentDetail="toDetail" />
                </tab-content>
                <tab-content title="About you"
                            icon="ti-check">
                    <form-aboutyou v-on:childToParentAboutYou="toAboutYou" />
                </tab-content>
            </form-wizard>
        </b-form>
    <p>Parent: {{json}}</p>
    </b-card>

</template>

<script>
import location from "@/components/Location.vue"
import detail from "@/components/Detail.vue"
import aboutYou from "@/components/AboutYou.vue"

export default {
    components: {
        "form-location": location,
        "form-detail": detail,
        "form-aboutyou": aboutYou
    },
    data: () => {
        return {
            formData: {
                fromLocation: '',
                fromDetail: '',
                fromAboutYou: ''
            }, 
            json: ''
        }
    },
    methods: {
        onComplete: function(){
            json = JSON.stringify(formData);
        },
        toLocation: function (value)
        {
            this.formData.fromLocation = value;
        },
        toDetail: function(value)
        {
            this.formData.fromDetail = value;
        },
        toAboutYou: function(value) 
        {
            this.formData.fromAboutYou = value;
        }
    }
  }
</script>