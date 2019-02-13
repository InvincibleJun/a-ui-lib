<template>
  <div>
    <c-dropdown @select="select">
      选择
      <template slot="menu">
        <c-dropdown-item value="a">小明1</c-dropdown-item>
        <c-dropdown-item value="b" disabled>小明2</c-dropdown-item>
        <c-dropdown-item value="c">小明3</c-dropdown-item>
        <c-dropdown-item value="e">小明4</c-dropdown-item>
        <c-dropdown-item value="f">小明5</c-dropdown-item>
        <c-dropdown-item value="g">小明6</c-dropdown-item>
      </template>
    </c-dropdown>
  </div>
</template>

<script>
import CDropdown from "@/components/dropdown";
import CDropdownItem from "@/components/dropdown-item";
import "@/assets/css/dropdown.scss";

export default {
  components: {
    CDropdown,
    CDropdownItem
  },
  methods: {
    select(value) {
      console.log(value)
    }
  }
};
</script>
