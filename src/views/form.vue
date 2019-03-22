<template>
  <div class="form-wrapper">
    <!-- <Form ref="form" :label-width="80" :model="formData" :rules="rules">
      <FormItem label="姓名" prop="name">
        <Input v-model="formData['name']"/>
      </FormItem>
      <FormItem label="年龄">
        <Input v-model="formData['age']"/>
      </FormItem>
      <FormItem>
        <Button @click="handleSubmit" type="primary">提交</Button>
      </FormItem>
    </Form>-->
    <!-- <form-group :list="formList" :url="url"></form-group> -->
    <Button @click="handleSubmit" type="primary">提交</Button>
    <Button @click="handleReset">重置</Button>
    <form-single
      ref="formSingle"
      v-for="(item, index) in formList"
      :key="`form_${index}`"
      :config="item"
      :value-data="valueData"
      :rule-data="ruleData"
      :error-store="errStore"
    ></form-single>
  </div>
</template>

<script>
import FormSingle from "_c/form-single";
import FormGroup from "_c/form-group";
import formData from "@/Mock/response/form-data";
import clonedeep from "clonedeep";
import { sentFormData } from "@/api/data";

// const validateName = (rule, value, callback) => {
//   if (value !== "Qiao") {
//     callback(new Error("Name error"));
//   } else {
//     callback();
//   }
// };
export default {
  components: {
    FormGroup,
    FormSingle
  },
  data() {
    return {
      url: "/data/formData",
      formList: formData,
      valueData: {},
      ruleData: {},
      errStore: {},
      initValueData: {} 
      //   formData: {
      //     name: "",
      //     age: 23
      //   },
      //   rules: {
      //     name: [
      //       {
      //         required: true,
      //         message: "Please fill in the user name",
      //         trigger: "blur"
      //       },
      //       {
      //         validator: validateName, trigger: 'blur'
      //       }
      //     ]
      //   }
      // };
    };
  },
  methods: {
    // handleSubmit() {
    //   this.$refs.form.validate(valid => {
    //     // console.log(valid);
    //     if (valid) {
    //       sentFormData(this.formData).then(res => {
    //         console.log(res);
    //       });
    //     }
    //   });
    // }
    handleSubmit() {
      let isValid = true
      this.$refs.formSingle.forEach(item => {
        item.validate(valid => {
          if (!valid) isValid = false
        })
      })
      if (isValid) {
        sentFormData({
            url: this.url,
            data: this.valueData
          })
            .then(res => {
              console.log(res);

              this.$emit("on-submit-success", res);
            })
            .catch(err => {
              console.log(err);
              this.$emit("on-submit-error", err);
              for (let key in err) {
                this.errorStore[key] = err[key];
              }
            });
      }
      // this.$refs.form.validate(valid => {
      //   if (valid) {
      //     sentFormData({
      //       url: this.url,
      //       data: this.valueList
      //     })
      //       .then(res => {
      //         console.log(res);

      //         this.$emit("on-submit-success", res);
      //       })
      //       .catch(err => {
      //         console.log(err);
      //         this.$emit("on-submit-error", err);
      //         for (let key in err) {
      //           this.errorStore[key] = err[key];
      //         }
      //       });
      //   }
      // });
    },
    handleReset() {
      // console.log(this.initValueList);
      // console.log(this.valueList);

      this.valueData = clonedeep(this.initValueData);
      // console.log(this.valueList);
    },
  
  },
  mounted() {
    let valueData = {};
    let ruleData = {};
    let errorStore = {};
    let initValueData = {}
    formData.forEach(item => {
      valueData[item.name] = item.value;
      ruleData[item.name] = item.rule;
      errorStore[item.name] = "";
      initValueData[item.name] = item.value
    });
    this.valueData = valueData;
    this.ruleData = ruleData;
    this.errStore = errorStore;
    this.initValueData = initValueData
  }
};
</script>
<style lang="stylus" >
.form-wrapper {
  padding: 20px;
}
</style>