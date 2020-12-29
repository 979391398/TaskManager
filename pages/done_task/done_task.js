// pages/done_task/done_task.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      id:1,
      thestyle:'已完成任务',
      name:'实验',
      detail:'这就是一个简单的实验这就是一个简单的实验这就是一个简单的实验这就是一个简单的实验这就是一个简单的实验这就是一个简单的实验这就是一个简单的实验',
      charge:'宋江',
      help:'无',
      deadline:'20.12.26',
      completion:'80%',  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  back: function(e){
     wx.switchTab({
       url: '/pages/history/history',
     })
  },


})