// This is an Questions & Answer template in
// collapsable accordion style
// It take a property as an array of objects with the following attributes
// [
//     {
//         visible: boolean (required) --> determined whether an accordion is visible
//         question: strValue
//         answer: strValue
//     }
// ]

// NOTE: string values in answer could be in raw html element

<template>
    <b-container class="my-4 py-4 template-wrapper">

      <div role="tablist">
        <b-card no-body v-for="(accordion, id) in accordions" :key = "id" class="card">
          <b-card-header header-tag="header" class="p-2" role="tab">
            <div class="container">
              <div class="row">
                <div class="col-1">
                    <i :class="{'ion ion-ios-arrow-up': accordion.visible, 'ion ion-ios-arrow-down': !accordion.visible, 'pt-3': true}"
                    ></i>
                </div>
                <div class="col-10 accordion-question-div">
                    <p  class = "accordion-question py-2" v-b-toggle="'accordion'+id" variant = "info" style="margin: 0;">{{accordion.question}}
                    </p>
                </div>
              </div>
            </div>
          </b-card-header>
          <b-collapse
            :id="'accordion'+id"
            accordion="localstay-accordion"
            role="tabpanel"
            :visible = accordion.visible
            @shown="accordion.visible = !accordion.visible"
            @hidden="accordion.visible = !accordion.visible"
          >
            <b-card-body class = "card-body">
              <div class="col-11 ml-auto">
                  <p class="pb-3 answer" v-html="accordion.answer"></p>
              </div>
            </b-card-body>
          </b-collapse>
        </b-card>

      </div>
    </b-container>
</template>
<script>
export default {
    data: function(){
        return{

        };
    },
    props: {
        accordions: {
            type: Array,
            required: true
        }
    } 
}
</script>

<style scoped>
    .template-wrapper{
        max-width: 1024px;
    }
    .card{
        border: none;
        background: inherit;
    }
    @media screen and (max-width: 520px){
        .ion{
            padding-top: 1.2em !important;
        }
        .answer{
            font-size: 1.3em;
        }
    }
    .accordion-question-div{
        cursor: pointer;
    }

    .accordion-question{
        font-size: 1.5em;
        font-weight: 500
    }

    .answer{
        padding-left: 2rem;
    }
</style>
