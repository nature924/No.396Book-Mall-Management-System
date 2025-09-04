const base = {
    get() {
        return {
            url : "http://localhost:8080/tushushangcheng/",
            name: "tushushangcheng",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/tushushangcheng/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "图书商城管理系统"
        } 
    }
}
export default base
