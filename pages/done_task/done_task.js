// pages/done_task/done_task.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    startX:0, //开始移动时距离左
    endX:0, //结束移动时距离左
    nowPage:0, //当前是第几个个页面
    xinList:[
    {
      id:1,
      thestyle:'已完成任务',
      name:'实验',
      detail:'这就是一个简单的实验',
      charge:'宋江',
      help:'无',
      deadline:'20.12.26',
      completion:'80%',
      display:0,
      scale:'',
      slateX:'',
      zIndex:0,
      style:''
    },
    {
      id:2,
      thestyle:'已完成任务',
      name:'实验',
      detail:'这就是一个简单的实验',
      charge:'宋江',
      help:'无',
      deadline:'20.12.26',
      completion:'80%',
      display:0,
      scale:'',
      slateX:'',
      zIndex:0,
      style:''
    },
    {
      id:3,
      thestyle:'已完成任务',
      name:'实验',
      detail:'这就是一个简单的实验',
      charge:'宋江',
      help:'无',
      deadline:'20.12.26',
      completion:'80%',
      display:0,
      scale:'',
      slateX:'',
      zIndex:0,
      style:''
    },
    {
      id:4,
      thestyle:'已完成任务',
      name:'实验',
      detail:'这就是一个简单的实验这就是一个简单的实验这就是一个简单的实验这就是一个简单的实验这就是一个简单的实验这就是一个简单的实验这就是一个简单的实验这就是一个简单的实验这就是一个简单的实验这就是一个简单的实验这就是一个简单的实验这就是一个简单的实验这就是一个简单的实验',
      charge:'宋江',
      help:'无',
      deadline:'20.12.26',
      completion:'80%',
      display:0,
      scale:'',
      slateX:'',
      zIndex:0,
      style:''
    },
    
    
         
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.checkPage(this.data.nowPage);
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
//手指触发开始移动
moveStart:function(e) {
  var startX = e.changedTouches[0].pageX;
  this.setData({
       startX:startX
  });
},
//手指触摸后移动完成触发事件
moveItem: function (e) {
  var that = this;
  var endX = e.changedTouches[0].pageX;
  this.setData({
       endX: endX
  });

  //计算手指触摸偏移剧距离
  var moveX = this.data.startX - this.data.endX;
  
  //向左移动
  if(moveX > 20 ){

       if(that.data.nowPage >= (that.data.xinList.length - 1)) {
            wx.showToast({
                 title: '这已经是最后的任务了',
                 icon: 'none'
            })
            return false;
       }
       that.setData({
            nowPage:that.data.nowPage+1
       });
       this.checkPage(this.data.nowPage);
  }
  if(moveX < -20) {
       if (that.data.nowPage <= 0) {
            wx.showToast({
                 title: '这是第一个任务了喔',
                 icon: 'none'
            })
            return false;
       } 
       that.setData({
            nowPage: that.data.nowPage - 1
       });
       this.checkPage(this.data.nowPage);
      
  }   
},

// 页面判断逻辑,传入参数为当前是第几页 
checkPage:function(index) {
  //信列表数据
  var data = this.data.xinList;
  var that = this;
  var m = 1;
  for(var i = 0;i < data.length;i ++) {
       //先将所有的页面隐藏
       var disp = 'xinList[' + i + '].display';
       var sca = 'xinList[' + i + '].scale';
       var slateX = 'xinList[' + i + '].slateX';
       var zIndex = 'xinList[' + i + '].zIndex';
       var style = 'xinList[' + i + '].style';
       that.setData({
            [disp]:0,
            [style]: "display:block",
       });
       //向左移动上一个页面
       if(i == (index - 1) ){
            that.setData({
                 [slateX]: '-120%',
                 [disp]: 1,
                 [zIndex]: 2,
                 
            });
       }
       //向右移动的最右边要display:none的页面
       if (i == (index + 3)) {
            that.setData({
                 [style]:'display:none',
                 [slateX]:'0',
                 [zIndex]: -10,
            });
       }
       if(i == index || (i > index && (i < index + 3))) {
            //显示最近的三封
            that.setData({
                 [disp]:1
            });
            //第一封信
            if(m == 1){
                 this.setData({
                      [sca]: 1,
                      [slateX]: 0,
                      [zIndex]: 1,
                 });
            }
            //第一封信
            else if (m == 2) {
                 this.setData({
                      [sca]: 0.8,
                      [slateX]:'20px',
                      [zIndex]: -1,
                 });
            }
            //第三封信
            else if (m == 3) {
                 this.setData({
                      [sca]: 0.6,
                      [slateX]: '40px',
                      [zIndex]: -2,
                 });
            }
            m ++;
       }
  
  }
}


})