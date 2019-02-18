<template>
  <div>
    <c-form :models="form" :rules="rules">
      <c-form-item label="姓名" prop="value">
        <c-input v-model="form.value"/>
      </c-form-item>
    </c-form>
  </div>
</template>

<script>
import CForm from "@/components/form";
import CFormItem from "@/components/form-item";
import CInput from "@/components/input";
import "@/assets/css/input.scss";

export default {
  components: {
    CForm,
    CFormItem,
    CInput
  },
  data() {
    return {
      form: {
        value: ""
      },
      rules: {
        value: [
          {
            pattern: /\d{1,5}/g,
            // trigger: 'change',
            message: "error3"
          }
        ]
      }
    };
  }
  //
};
</script>
