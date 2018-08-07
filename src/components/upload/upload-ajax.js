const noop = function() {}

/**
 *
 * @param {object} option 上传相关配置
 */
export default function(option) {
    const {
        action,
        headers = {},
        data,
        maxSize,
        file,
        chipSize,
        chip,
        onProgress = noop,
        onError = noop,
        onSuccess = noop,
        onSizeError = noop
    } = option

    if (typeof action !== 'string') {
        throw new Error('action must be as a string')
    }

    // size判断
    if (maxSize < file.size) {
        onSizeError()
    }

    // append data
    var form = new FormData()
    for (let i in data) {
        if (data.hasOwnProperty(i)) {
            form.append(i, data[i])
        }
    }

    // 文件拆分
    if (chip) {}

    // append file
    if (file) {
        form.append(file.name, file, file.name)
    }

    send(form, action, headers, {
        onError,
        onSuccess,
        onProgress
    })
}

/**
 * 文件分片
 * @param {blob} file 原始文件
 * @param {number} size 拆分个数
 * @return {array<Blob>} 文件列表
 */
function chipFile(file, size) {
    if (file.size <= size * 1024) {
        return [file]
    }

    let fileChipList = []
    let start = 0

    while (start <= file.size) {
        fileChipList.push(file.slice(start, size * 1024))
    }

    return fileChipList
}

/**
 * 上传函数
 * @param {object} data form
 * @param {string} action url
 * @param {object} headers header设置
 * @param {object} handler hook函数
 */
function send(data, action, headers, handler) {
    const { onError, onSuccess, onProgress } = handler

    const xhr = new XMLHttpRequest()
    xhr.open('POST', action)

    // setHeader
    for (let i in headers) {
        if (headers.hasOwnProperty(i)) {
            xhr.setRequestHeader(i, headers[i])
        }
    }

    let lastTime = new Date(),
        lastLoaded = 0

    xhr.upload.onprogress = function(e) {
        const { loaded, total } = e

        const nowTime = new Date()
        const t = nowTime - lastTime
        const l = loaded - lastLoaded

        lastTime = nowTime
        lastLoaded = loaded

        let speed = (l / t).toFixed(0)
        let percent = (loaded / total).toFixed(2)

        onProgress(speed, percent)
    }

    xhr.onload = onSuccess
    xhr.onerror = function(error) {
        onError()
    }

    xhr.send(data)
}