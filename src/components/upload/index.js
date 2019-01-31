import Upload from './upload.vue';
import Button from '../button';
import FileList from './file-list.vue';

export default {
  name: 'CUpload',

  components: { Upload, Button, FileList },

  props: {
    customResponse: {
      type: Function
    },

    // 上传路径
    action: {
      required: true,
      type: String
    },

    // 是否分片
    chip: {
      type: Boolean,
      default: false
    },

    // 分片大小
    chipSize: {
      type: Number,
      default: 50
    },

    // 最大文件大小
    maxSize: {
      type: Number,
      default: 20
    },

    // 期待mime类型
    expect: {
      type: String,
      default: ''
    },

    // 请求头信息
    headers: Object,

    // 携带数据
    data: Object,

    // 是否支持拖拽
    drag: {
      type: Boolean,
      default: false
    },

    // 是否支持多文件上传
    multiple: {
      type: Boolean,
      default: false
    },

    // 是否展示已上传列表
    showList: {
      type: Boolean,
      default: false
    },

    // 是否携带本地cookie
    withCookie: {
      type: Boolean,
      default: false
    },

    // 自动上传
    autoUpload: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      speed: 0,
      percent: 0,
      list: []
    };
  },

  methods: {
    openUploadView() {
      this.$refs.upload.open();
    },

    progress({ speed, percent }) {
      this.speed = speed;
      this.percent = percent * 100;
    },

    /**
     *
     * @param {object} params
     * @param {string} params.url 上传成功url
     * @param {string} params.response 上传成功response
     * @param {string} params.fileName 原始文件名
     * @param {string} params.status 状态 [done, uploading, error, willDone]
     */
    fileChange({ key, fileName, url, response, status }) {
      const option = arguments[0];
      let target = this.list.find(val => val.key === key);
      if (target) {
        target = option;
      } else {
        this.list.push(option);
      }
    }
  },

  render(h) {
    return (
      <div>
        {this.$slots.trigger ? (
          <div onClick={() => this.openUploadView()}>{this.$slots.trigger}</div>
        ) : (
          <Button onClick={() => this.openUploadView()}> 点击上传 </Button>
        )}
        <div> {this.speed}k / s </div> <div> {this.percent} % </div>
        <Upload
          // customResponse={this.customResponse}
          onProgress={this.progress}
          expect={this.expect}
          fileChange={this.fileChange}
          auto-upload={this.autoUpload}
          ref="upload"
        />
        <FileList />
      </div>
    );
  }
};
