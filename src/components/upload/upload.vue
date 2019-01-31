<template>
  <div>
    <input ref="input" type="file" @change="changHandler" class="c-upload-input">
  </div>
</template>

<script>
import alert from "../alert";
import http from "./upload-ajax";

let uuid = 0;
export default {
  props: {
    expect: String,
    autoUpload: Boolean,
    fileChange: Function
  },
  data() {
    return { file: null };
  },

  methods: {
    open() {
      this.$refs.input.click();
    },

    changHandler(e) {
      this.path = e.target.value;
      const [file] = e.target.files;
      const { type, name } = file;
      const params = {
        type,
        name,
        url: "",
        response: null,
        status: "willDone"
      };

      this.fileChange(params);

      if (!this.checkExpect(type)) {
        alert(`${this.expect}mime类型错误`);

        return;
      }
      if (this.autoUpload) {
        this.upload(file, params);
      }
    },

    // eslint-disable-next-line no-unused-vars
    onSucess(response, params) {
      const { customResponse, fileChange } = this.$parent;
      let url;

      if (customResponse && typeof customResponse === "function") {
        url = customResponse(response);
      } else {
        url = response.url;
      }

      fileChange({ ...params, url, response, status: "done" });
    },

    onSizeError(params) {
      this.$parent.fileChange({ ...params, status: "error", msg: "文件过大" });
    },

    onError(err) {
      fileChange({
        ...params,
        response: err,
        status: "error",
        msg: "上传失败"
      });
    },

    upload(file, params) {
      const {
        chip,
        chipSize,
        maxSize,
        data,
        action,
        headers,
        withCookie
      } = this.$parent;

      const option = {
        action,
        file,
        data,
        headers,
        withCookie,
        chip,
        maxSize,
        chipSize,
        onSucess: response => {
          this.onSucess(response, params);
        },
        onError: error => {
          this.onError(error, params);
        },
        onSizeError: () => {
          this.onSizeError();
        },
        onProgress: (speed, percent) => {
          this.$emit("progress", {
            speed,
            percent
          });
        }
      };

      http(option);
    },

    // eslint-disable-next-line no-unused-vars
    checkExpect(type) {
      if ("" === this.expect) {
        return true;
      }

      const match = this.expect.match(/^(image|video|auido)\/(\*|[a-zA-Z]+)$/);

      if (this.expect && match) {
        const matchType = this.type.match(/^([a-zA-Z0-9]+)\/([a-zA-Z0-9]+)$/);

        if (!matchType || !matchType[1] || !matchType[2]) {
          return false;
        }

        return (
          matchType[1] === match[1] &&
          ("*" === match[2] || match[2] === matchType[2])
        );
      } else {
        // expect 非法 或者置空时,不坚持文件类型
        return false;
      }

      //
    }
  }
};
</script>
