<template>
  <div>
    <input ref="input" type="file" @change="changHandler" class="c-upload-input" />
  </div>
</template>

<script>
import alert from '../alert'
import http from './upload-ajax'
export default {
  data() {
    return {
      file: null
    }
  },

  props: {
    expect: String,
    autoUpload: Boolean
  },

  methods: {
    open() {
      this.$refs['input'].click()
    },

    changHandler(e) {
      this.path = e.target.value
      const file = e.target.files[0]
      const { type } = file

      if (!this.checkExpect(type)) {
        alert(`${this.expect}mime类型错误`)
        return
      }
      if (this.autoUpload) {
        this.upload(file)
      }
    },

    onSucess(res) {

    },


    onSizeError() {
      
    },

    onError(err) {
      console.log(err)
    },

    upload(file) {
      const { chip, chipSize, maxSize, data, action, headers, withCookie } = this.$parent
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
          this.onSucess()
        },
        onError: () => {
          this.onError()
        },
        onSizeError: () => {
          this.onSizeError()
        },
        onProgress: (speed, percent) => {
          this.$emit('progress', { speed, percent })
        }
      }
      http(option)
    },

    checkExpect(type) {
      //
      let match = this.expect.match(/^(image|video|auido)\/(\*|[a-zA-Z]+)$/)
      
      if (this.expect && match) {

        let matchType = this.type.match(/^([a-zA-Z0-9]+)\/([a-zA-Z0-9]+)$/)

        if (matchType && matchType[1] && matchType[2]) {

          if (matchType[1] === match[1]) {
          
            if (match[2] === '*') {
              // 全量匹配
              return true
            } else if (match[2] === matchType[2]) {
              // mime末尾相同
              return true
            } else {
              return false
            }
          } else {
            // mime首位不同 直接返回
            return false
          }

        } else {
          // 非常规mime类型
          return false
        }
      } else {
        // expect 非法 或者置空时,不坚持文件类型
        return true
      }
      //
    }
  }
}
</script>
