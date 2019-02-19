<template>
  <div>
    <c-form :models="form" :rules="rules" ref="form">
      <c-form-item label="姓名" prop="value">
        <c-input v-model="form.value"/>
      </c-form-item>
      <c-form-item label="爱好" prop="hoby">
        <c-input v-model="form.hoby"/>
      </c-form-item>
    </c-form>
    <button @click="reset">重置</button>
    <button @click="validate">校验</button>
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
        value: "",
        hoby: ""
      },
      rules: {
        value: [
          {
            pattern: /\d{1,5}/g,
            trigger: "change",
            message: "错了"
          },
          {
            pattern: /\d{1,2}/g,
            trigger: "change",
            message: "错了aa"
          }
        ],
        hoby: [
          {
            required: true,
            message: "必填"
          }
        ]
      }
    };
  },
  methods: {
    reset() {
      this.$refs.form.resetFeilds("value");
    },
    validate() {
      this.$refs.form.checkFeilds(err => {
        console.log(err);
      });
    }
  }
  //
};
</script>
