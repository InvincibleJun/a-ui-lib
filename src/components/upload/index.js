import Upload from './upload.vue'
import { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } from 'constants'

export default {
  components: {
    Upload
  },
  props: {
    action: {
      required: true,
      type: String
    },
    chip: {
      type: Boolean,
      default: false
    },
    chipSize: {
      type: Number,
      default: 50
    },
    maxSize: {
      type: Number,
      default: 20
    },
    expect: {
      type: String,
      default: ''
    },
    headers: Object,
    data: Object,
    drag: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    showList: {
      type: Boolean,
      default: false
    },
    withCookie: {
      type: Boolean,
      default: false
    },
    autoUpload: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      speed: 0,
      percent: 0
    }
  },

  methods: {
    openUploadView() {
      this.$refs['upload'].open()
    },

    progress({ speed, percent }) {
      this.speed = speed
      this.percent = percent * 100
    }
  },

  render() {
    return (
      <div>
        {this.$slots.trigger ? (
          <div onClick={() => this.openUploadView()}>{this.$slots.trigger}</div>
        ) : (
          <button onClick={() => this.openUploadView()}>点击上传</button>
        )}
        <div>{this.speed}k/s</div>
        <div>{this.percent}%</div>
        <Upload
          onProgress={this.progress}
          expect={this.expect}
          auto-upload={this.autoUpload}
          ref="upload"
        />
      </div>
    )
  }
}
