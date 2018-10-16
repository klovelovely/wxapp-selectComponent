//index.js
//获取应用实例
const app = getApp()

Page({
    data: {},
    onLoad: function() {},
    onReady: function() {
        // 实例化弹窗1
        this.dialog1 = this.selectComponent("#dialog1");

        // 实例化弹窗2
        this.dialog2 = this.selectComponent("#dialog2");
    },

    /**
     * 弹窗1
     */
    showDialog1() {
        this.dialog1.showDialog();
    },
    cancelDialog1() {
        console.log('你点击了取消');
        this.dialog1.hideDialog();
    },
    confirmDialog1() {
        console.log('你点击了确定');
        this.dialog1.hideDialog();
    },

    /**
     * 弹窗2
     */
    showDialog2() {
        this.dialog2.showDialog();
    },
    cancelDialog2() {
        console.log('2你点击了取消');
        this.dialog2.hideDialog();
    },
    confirmDialog2() {
        console.log('2你点击了确定');
        this.dialog2.hideDialog();
    },

})