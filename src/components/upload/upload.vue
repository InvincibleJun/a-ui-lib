<template>
  <div>
    <input
      ref="input"
      type="file"
      @change="changHandler"
      class="c-upload-input"
    >
  </div>
</template>

<script>
import alert from '../alert';
import http from './upload-ajax';

export default {
  props: {
    expect: String,
    autoUpload: Boolean
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

      const { type } = file;

      if (!this.checkExpect(type)) {
        alert(`${ this.expect }mime类型错误`);

        return;
      }
      if (this.autoUpload) {
        this.upload(file);
      }
    },

    // eslint-disable-next-line no-unused-vars
    onSucess(res) {

      //
    },

    onSizeError() {

      //
    },

    onError(err) {
      console.log(err);
    },

    upload(file) {
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
        onSucess: () => {
          this.onSucess();
        },
        onError: () => {
          this.onError();
        },
        onSizeError: () => {
          this.onSizeError();
        },
        onProgress: (speed, percent) => {
          this.$emit('progress', {
            speed,
            percent
          });
        }
      };

      http(option);
    },

    // eslint-disable-next-line no-unused-vars
    checkExpect(type) {

      if ('' === this.expect) {
        return true;
      }

      const match = this.expect.match(/^(image|video|auido)\/(\*|[a-zA-Z]+)$/);

      if (this.expect && match) {
        const matchType = this.type.match(/^([a-zA-Z0-9]+)\/([a-zA-Z0-9]+)$/);

        if (!matchType || !matchType[1] || !matchType[2]) {
          return false;
        }

        return (
          matchType[1] === match[1]
          && ('*' === match[2] || match[2] === matchType[2])
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
