$('.fa-copy').on('click', function() {
    window.toastr.info('已复制代码到粘贴板!')
    // document.execCommand('Copy')
})

function renderTpl(html) {
    return `<div class="code-wrapper">${html}</div>`
}

function htmlEncode(html) {
    const temp = document.createElement('div')
    temp.textContent != null ? (temp.textContent = html) : (temp.innerText = html)
    return temp.innerHTML.replace(/^\s+/, '')
}

$('.fa-code').on('click', function() {
    const html = style_html($(this).closest('.ibox')[0].innerHTML)
    // console.log(html)

    layer.open({
        type: 1,
        title: false,
        closeBtn: 0,
        area: '820px',
        skin: 'layui-layer-nobg', //没有背景色
        shadeClose: true,
        content: renderTpl('<pre><code class="html">' + htmlEncode(html) + '</code></pre>'),
        success: function(ctx) {
            hljs.highlightBlock(ctx.find('pre code')[0])
        }
    })
})
