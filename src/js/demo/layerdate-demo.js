        //外部js调用
        laydate({
          elem: '#hello', //目标元素。由于laydate.js封装了一个轻量级的选择器引擎，因此elem还允许你传入class、tag但必须按照这种方式 '#id .class'
          event: 'focus' //响应事件。如果没有传入event，则按照默认的click
      });

      //日期范围限制
      var start = {
          elem: '#start',
          format: 'YYYY/MM/DD hh:mm:ss',
          min: laydate.now(), //设定最小日期为当前日期
          max: '2099-06-16 23:59:59', //最大日期
          istime: true,
          istoday: false,
          choose: function (datas) {
              end.min = datas; //开始日选好后，重置结束日的最小日期
              end.start = datas //将结束日的初始值设定为开始日
          }
      };
      var end = {
          elem: '#end',
          format: 'YYYY/MM/DD hh:mm:ss',
          min: laydate.now(),
          max: '2099-06-16 23:59:59',
          istime: true,
          istoday: false,
          choose: function (datas) {
              start.max = datas; //结束日选好后，重置开始日的最大日期
          }
      };
      laydate(start);
      laydate(end);