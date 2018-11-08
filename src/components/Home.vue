<template>
  <h1>home page</h1>
</template>

<script>
import "@/vendor/libs/hover-dropdown/HoverDropdown";
import {
  MegaDropdown,
  MegaDropdownToggle,
  MegaDropdownMenu
} from "@/vendor/libs/mega-dropdown";

export default {
  name: "homer",
  metaInfo: {
    title: "home"
  },
  components: {
    MegaDropdown,
    MegaDropdownToggle,
    MegaDropdownMenu
  },
  data: () => ({
    searchExpanded: false
  })
};
</script>
