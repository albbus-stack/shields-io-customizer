var app = new Vue({
    el: '#app',
    data: {
        lab: "",
        mes: "",
        col: "",
        sty: "",
        logo: "",
        logoCol: "",
        logoWid: "",
        labelCol: "",
        link: "",
        lab1: "",
        mes1: "",
        col1: "",
        sty1: "",
        logo1: "",
        logoCol1: "",
        logoWid1: "",
        labelCol1: "",
        link1: "",
        type: "",
        user: "",
        repo: "",
        gitType: "",
        profileTheme: ""
    },
    methods: {
        copyMD: function() {
            if (this.link != "") {
                let md = '[!['.concat(this.lab, ' ](', this.URL, ')](', 'https://', this.link, ')')
                if (window.clipboardData && window.clipboardData.setData) {
                    return clipboardData.setData("Text", md)
                } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
                    var textarea = document.createElement("textarea")
                    textarea.textContent = md
                    textarea.style.position = "fixed"
                    document.body.appendChild(textarea)
                    textarea.select()
                    try {
                        return document.execCommand("copy")
                    } catch (ex) {
                        console.warn("Copy to clipboard failed.", ex)
                        return false
                    } finally {
                        var notification = document.createElement("div")
                        notification.className = "notification is-primary img is-size-6"
                        notification.innerHTML = "Badge copied in .md format"
                        notification.style.animation = "fade 2s ease-in 1s"
                        document.body.appendChild(notification)
                        setTimeout(function() {
                            document.body.removeChild(notification)
                        }, 3000)
                        document.body.removeChild(textarea)
                    }
                }
            } else {
                let md = '!['.concat(this.lab, '](', this.URL, ')')
                if (window.clipboardData && window.clipboardData.setData) {
                    return clipboardData.setData("Text", md)
                } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
                    var textarea = document.createElement("textarea")
                    textarea.textContent = md
                    textarea.style.position = "fixed"
                    document.body.appendChild(textarea)
                    textarea.select()
                    try {
                        return document.execCommand("copy")
                    } catch (ex) {
                        console.warn("Copy to clipboard failed.", ex)
                        return false
                    } finally {
                        var notification = document.createElement("div")
                        notification.className = "notification is-primary img is-size-6"
                        notification.innerHTML = "Badge copied in .md format"
                        notification.style.animation = "fade 2s ease-in 1s"
                        document.body.appendChild(notification)
                        setTimeout(function() {
                            document.body.removeChild(notification)
                        }, 3000)
                        document.body.removeChild(textarea)
                    }
                }
            }
        },
        copyHTML: function() {
            let html = '<img src="'.concat(this.URL, '"', '>')
            if (window.clipboardData && window.clipboardData.setData) {
                return clipboardData.setData("Text", html)
            } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
                var textarea = document.createElement("textarea")
                textarea.textContent = html
                textarea.style.position = "fixed"
                document.body.appendChild(textarea)
                textarea.select()
                try {
                    return document.execCommand("copy")
                } catch (ex) {
                    console.warn("Copy to clipboard failed.", ex)
                    return false
                } finally {
                    var notification = document.createElement("div")
                    notification.className = "notification is-primary img is-size-6"
                    notification.innerHTML = "Badge copied in html format"
                    notification.style.animation = "fade 2s ease-in 1s"
                    document.body.appendChild(notification)
                    setTimeout(function() {
                        document.body.removeChild(notification)
                    }, 3000)
                    document.body.removeChild(textarea)
                }
            }
        },
        downloadSVG: function() {
            fetch('https://cors-anywhere.herokuapp.com/' + this.URL)
                .then(resp => resp.blob())
                .then(blob => {
                    const url = window.URL.createObjectURL(blob)
                    const a = document.createElement('a')
                    a.style.display = 'none'
                    a.href = url
                    a.download = 'badge'.concat(this.label ? '-' + this.label : '', '.svg')
                    document.body.appendChild(a)
                    a.click()
                    window.URL.revokeObjectURL(url)
                })
                .catch(() => console.log('Download failed!'))
        },
        copyMD1: function() {
            if (this.link != "") {
                let md = '[!['.concat(this.lab, '](', this.URL, ')](', 'https://', this.link, ')')
                if (window.clipboardData && window.clipboardData.setData) {
                    return clipboardData.setData("Text", md)
                } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
                    var textarea = document.createElement("textarea")
                    textarea.textContent = md
                    textarea.style.position = "fixed"
                    document.body.appendChild(textarea)
                    textarea.select()
                    try {
                        return document.execCommand("copy")
                    } catch (ex) {
                        console.warn("Copy to clipboard failed.", ex)
                        return false
                    } finally {
                        var notification = document.createElement("div")
                        notification.className = "notification is-primary img is-size-6"
                        notification.innerHTML = "Badge copied in .md format"
                        notification.style.animation = "fade 2s ease-in 1s"
                        document.body.appendChild(notification)
                        setTimeout(function() {
                            document.body.removeChild(notification)
                        }, 3000)
                        document.body.removeChild(textarea)
                    }
                }
            } else {
                let md = '!['.concat(this.lab, '](', this.URL, ')')
                if (window.clipboardData && window.clipboardData.setData) {
                    return clipboardData.setData("Text", md)
                } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
                    var textarea = document.createElement("textarea")
                    textarea.textContent = md
                    textarea.style.position = "fixed"
                    document.body.appendChild(textarea)
                    textarea.select()
                    try {
                        return document.execCommand("copy")
                    } catch (ex) {
                        console.warn("Copy to clipboard failed.", ex)
                        return false
                    } finally {
                        var notification = document.createElement("div")
                        notification.className = "notification is-primary img is-size-6"
                        notification.innerHTML = "Badge copied in .md format"
                        notification.style.animation = "fade 2s ease-in 1s"
                        document.body.appendChild(notification)
                        setTimeout(function() {
                            document.body.removeChild(notification)
                        }, 3000)
                        document.body.removeChild(textarea)
                    }
                }
            }
        },
        copyHTML1: function() {
            let html = '<img src="'.concat(this.URL, '"', '>')
            if (window.clipboardData && window.clipboardData.setData) {
                return clipboardData.setData("Text", html)
            } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
                var textarea = document.createElement("textarea")
                textarea.textContent = html
                textarea.style.position = "fixed"
                document.body.appendChild(textarea)
                textarea.select()
                try {
                    return document.execCommand("copy")
                } catch (ex) {
                    console.warn("Copy to clipboard failed.", ex)
                    return false
                } finally {
                    var notification = document.createElement("div")
                    notification.className = "notification is-primary img is-size-6"
                    notification.innerHTML = "Badge copied in html format"
                    notification.style.animation = "fade 2s ease-in 1s"
                    document.body.appendChild(notification)
                    setTimeout(function() {
                        document.body.removeChild(notification)
                    }, 3000)
                    document.body.removeChild(textarea)
                }
            }
        },
        downloadSVG1: function() {
            fetch('https://cors-anywhere.herokuapp.com/' + this.URL)
                .then(resp => resp.blob())
                .then(blob => {
                    const url = window.URL.createObjectURL(blob)
                    const a = document.createElement('a')
                    a.style.display = 'none'
                    a.href = url
                    a.download = 'badge'.concat(this.label ? '-' + this.label : '', '.svg')
                    document.body.appendChild(a)
                    a.click()
                    window.URL.revokeObjectURL(url)
                })
                .catch(() => console.log('Download failed!'))
        },
        resetInputs: function() {
            this.lab1 = ""
            this.mes1 = ""
            this.col1 = ""
            this.sty1 = ""
            this.logo1 = ""
            this.logoCol1 = ""
            this.logoWid1 = ""
            this.labelCol1 = ""
            this.link1 = ""
            this.user = ""
            this.repo = ""
        }
    },
    computed: {
        URL: function() {
            return 'https://img.shields.io/static/v1?'.concat('label=', this.lab, '&message=', this.mes,
                '&color=', this.col, '&style=', this.sty, '&logo=', this.logo, '&logoColor=', this.logoCol,
                '&logoWidth=', this.logoWid, '&labelColor=', this.labelCol, '&link=', this.link)
        },
        URL1: function() {
            if (this.type === 'github') {
                if (this.gitType === 'profile') {
                    return 'https://github-readme-stats.vercel.app/api?'.concat('username=', this.user, '&theme=', this.profileTheme)
                } else if (this.gitType === 'repoSize') {
                    return 'https://img.shields.io/github/repo-size/'.concat(this.user, '/', this.repo, '?', 'label=', this.lab1,
                        '&color=', this.col1, '&style=', this.sty1, '&logo=', this.logo1, '&logoColor=', this.logoCol1,
                        '&logoWidth=', this.logoWid1, '&labelColor=', this.labelCol1)
                } else if (this.gitType === 'pullRequests') {
                    return 'https://img.shields.io/github/issues-pr/'.concat(this.user, '/', this.repo, '?', 'label=', this.lab1,
                        '&color=', this.col1, '&style=', this.sty1, '&logo=', this.logo1, '&logoColor=', this.logoCol1,
                        '&logoWidth=', this.logoWid1, '&labelColor=', this.labelCol1)
                } else if (this.gitType === 'issues') {
                    return 'https://img.shields.io/github/issues/'.concat(this.user, '/', this.repo, '?', 'label=', this.lab1,
                        '&color=', this.col1, '&style=', this.sty1, '&logo=', this.logo1, '&logoColor=', this.logoCol1,
                        '&logoWidth=', this.logoWid1, '&labelColor=', this.labelCol1)
                } else if (this.gitType === 'stars') {
                    return 'https://img.shields.io/github/stars/'.concat(this.user, '/', this.repo, '?', 'label=', this.lab1,
                        '&color=', this.col1, '&style=', this.sty1, '&logo=', this.logo1, '&logoColor=', this.logoCol1,
                        '&logoWidth=', this.logoWid1, '&labelColor=', this.labelCol1)
                } else if (this.gitType === 'forks') {
                    return 'https://img.shields.io/github/stars/'.concat(this.user, '/', this.repo, '?', 'label=', this.lab1,
                        '&color=', this.col1, '&style=', this.sty1, '&logo=', this.logo1, '&logoColor=', this.logoCol1,
                        '&logoWidth=', this.logoWid1, '&labelColor=', this.labelCol1)
                } else if (this.gitType === 'lastCommit') {
                    return 'https://img.shields.io/github/last-commit/'.concat(this.user, '/', this.repo, '?', 'label=', this.lab1,
                        '&color=', this.col1, '&style=', this.sty1, '&logo=', this.logo1, '&logoColor=', this.logoCol1,
                        '&logoWidth=', this.logoWid1, '&labelColor=', this.labelCol1)
                } else if (this.gitType === 'release') {
                    return 'https://img.shields.io/github/release/'.concat(this.user, '/', this.repo, '?', 'label=', this.lab1,
                        '&color=', this.col1, '&style=', this.sty1, '&logo=', this.logo1, '&logoColor=', this.logoCol1,
                        '&logoWidth=', this.logoWid1, '&labelColor=', this.labelCol1)
                } else if (this.gitType === 'license') {
                    return 'https://img.shields.io/github/license/'.concat(this.user, '/', this.repo, '?', 'label=', this.lab1,
                        '&color=', this.col1, '&style=', this.sty1, '&logo=', this.logo1, '&logoColor=', this.logoCol1,
                        '&logoWidth=', this.logoWid1, '&labelColor=', this.labelCol1)
                }
                return
            }
        }
    }
})