import Upload from './upload.vue';

export default {
  name: 'CUpload',

  components: { Upload },

  props: {

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
      percent: 0
    };
  },

  methods: {
    openUploadView() {
      this.$refs.upload.open();
    },

    progress({
      speed, percent
    }) {
      this.speed = speed;
      this.percent = percent * 100;
    }
  },

  render() {
    return (
      <div>
        {this.$slots.trigger
          ? <div onClick={
            () => this.openUploadView()}>{this.$slots.trigger
            }</div>
          : <button onClick={() => this.openUploadView()}> 点击上传 </button>
        }
        <div> {this.speed}k / s </div> <div> {this.percent} % </div>
        <Upload
          onProgress={this.progress}
          expect={this.expect}
          auto-upload={this.autoUpload}
          ref='upload'
        />
      </div>
    );
  }
};
