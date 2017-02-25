var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.typeChange = function(){
        $scope.ticketTypeModelTip = $scope.ticketTypeModel['key'];
    }
    $scope.ticketDays = [];
    $scope.allDaysList = [];
    $scope.daysList = [];
    $scope.dayList = [];
    $scope.timeList = [''];
    $scope.lastData = [];
    $scope.lasttotalmoney = 0
    $scope.ticketType = {
        1:{
            key:1,
            val:"我这个月辛辛苦苦上班啦~~"
          },
        2:{
            key:2,
           val:"早早下班什么的最开心~~"
          }
        };
    $scope.ticketTypeModel = $scope.ticketType[1];
    $scope.addDate = function(){
       
        $scope.timeList.push('');
    }
    $scope.dateDelete = function(index){
        $scope.timeList.splice(index,1);
    }
//    $scope.isWorkday(date) = function(){
//        var date = !date ? new Date() : new Date(date);
//        var getday = date.getDay();
//        if (getday == 0 && getday == 6) {
//            return '休息日';
//        }
//        else {
//            return '工作日';
//        }
//    }
    $scope.dataList = [];
    $scope.getData = function(dayList){
        $scope.lastData = [];
        $scope.lasttotalmoney = 0;
        var timeFun = function(type){
            if(type == 1){
                return '21:'+parseInt(Math.random()*29+1,10);
            }
            if(type == 2){
                return '21:'+parseInt(Math.random()*29+1+30,10);
            }
            if(type == 3){
                return '22:'+parseInt(Math.random()*59+1,10);
            }
            if(type == 4){
                return '23:'+parseInt(Math.random()*30+1,10);
            }
        }
         var basicFun = function(type){
            var myMileage = $scope.mileageModel;
             var totalMoney;
            // 9:00-9:30
            if(type == 1){
                if(myMileage < 15){
                     totalMoney = parseInt((myMileage - 3)*2.3 + myMileage*Math.round(Math.random()*1.5) + 13+Math.round(Math.random()*9+1),10);
                }else{
                     totalMoney =parseInt( 12*2.3 + (myMileage - 15)*2.3*1.5 + myMileage*Math.round(Math.random()*1.5) + 13+Math.round(Math.random()*9+1),10);
                }
            }
            // 9：30 ——10：00
            if(type == 2){
                if(myMileage < 15){
                     totalMoney = parseInt((myMileage - 3)*2.3 + myMileage*Math.round(Math.random()*1) + 13+Math.round(Math.random()*9+1),10);
                }else{
                     totalMoney = parseInt(12*2.3 + (myMileage - 15)*2.3*1.5 + myMileage*Math.round(Math.random()*1)  + 13+Math.round(Math.random()*9+1),10);
                }
            }
            // 10：00 ——11：00
            if(type == 3){
                if(myMileage < 15){
                     totalMoney = parseInt((myMileage - 3)*2.3 + myMileage*Math.round(Math.random()*0.5)  + 13+Math.round(Math.random()*9+1),10);
                }else{
                     totalMoney = parseInt(12*2.3 + (myMileage - 15)*2.3*1.5 + myMileage*Math.round(Math.random()*0.5)  + 13+Math.round(Math.random()*9+1),10);
                }
            }
            // 11：00 后
            if(type == 4){
                if(myMileage < 15){
                     totalMoney = parseInt((myMileage - 3)*2.3*1.2 + myMileage*Math.round(Math.random()*0.4)  + 13+Math.round(Math.random()*9+1),10);
                }else{
                     totalMoney = parseInt(12*2.3*1.2 + (myMileage - 15)*2.3*1.5 + myMileage*Math.round(Math.random()*0.4)  + 13+Math.round(Math.random()*9+1),10);
                }
            }
            return totalMoney;
        }
        var dayLength = dayList.length;
        var type1length = Math.round(dayLength/6);
        var type2length = Math.round(dayLength/3)-2;
        var type3length = Math.round(dayLength/3)+2;
        var type4length = dayLength-type1length-type2length-type3length;
        
        var day1list = [];
        for (var i = 0 ;i<type1length;i++){
            if (dayList.length>0) {
                //在数组中产生一个随机索引
                var arrIndex = Math.floor(Math.random()*dayList.length);
                //将此随机索引的对应的数组元素值复制出来
                $scope.lastData.push({'day':'日期'+dayList[arrIndex],'time':'时间'+timeFun(1),'price':'价格'+basicFun(1)})
                day1list[i] = {'日期':dayList[arrIndex],'时间':timeFun(1),'价格':basicFun(1)};
                $scope.lasttotalmoney = $scope.lasttotalmoney + basicFun(1);
                //然后删掉此索引的数组元素,这时候temp_array变为新的数组
                dayList.splice(arrIndex, 1);
            } else {
                //数组中数据项取完后,退出循环,比如数组本来只有10项,但要求取出20项.
                break;
            }
        }
        var day2list = [];
        for (var i = 0 ;i<type2length;i++){
            if (dayList.length>0) {
                //在数组中产生一个随机索引
                var arrIndex = Math.floor(Math.random()*dayList.length);
                //将此随机索引的对应的数组元素值复制出来
                $scope.lastData.push({'day':'日期'+dayList[arrIndex],'time':'时间'+timeFun(2),'price':'价格'+basicFun(2)})
                day2list[i] = {'日期':dayList[arrIndex],'时间':timeFun(2),'价格':basicFun(2)};
                //然后删掉此索引的数组元素,这时候temp_array变为新的数组
                $scope.lasttotalmoney = $scope.lasttotalmoney + basicFun(2);
                dayList.splice(arrIndex, 1);
            } else {
                //数组中数据项取完后,退出循环,比如数组本来只有10项,但要求取出20项.
                break;
            }
        }
        var day3list = [];
        for (var i = 0 ;i<type3length;i++){
            if (dayList.length>0) {
                //在数组中产生一个随机索引
                var arrIndex = Math.floor(Math.random()*dayList.length);
                //将此随机索引的对应的数组元素值复制出来
               $scope.lastData.push({'day':'日期'+dayList[arrIndex],'time':'时间'+timeFun(3),'price':'价格'+basicFun(3)})
                day3list[i] = {'日期':dayList[arrIndex],'时间':timeFun(3),'价格':basicFun(3)};
                //然后删掉此索引的数组元素,这时候temp_array变为新的数组
                $scope.lasttotalmoney = $scope.lasttotalmoney + basicFun(3);
                dayList.splice(arrIndex, 1);
            } else {
                //数组中数据项取完后,退出循环,比如数组本来只有10项,但要求取出20项.
                break;
            }
        }
        var day4list = [];
        for (var i = 0 ;i<type4length;i++){
            if (dayList.length>0) {
                //在数组中产生一个随机索引
                var arrIndex = Math.floor(Math.random()*dayList.length);
                //将此随机索引的对应的数组元素值复制出来\
                $scope.lastData.push({'day':'日期'+dayList[arrIndex],'time':'时间'+timeFun(4),'price':'价格'+basicFun(4)})
                day4list[i] = {'日期':dayList[arrIndex],'时间':timeFun(4),'价格':basicFun(4)};
                //然后删掉此索引的数组元素,这时候temp_array变为新的数组
                $scope.lasttotalmoney = $scope.lasttotalmoney + basicFun(4);
                dayList.splice(arrIndex, 1);
            } else {
                //数组中数据项取完后,退出循环,比如数组本来只有10项,但要求取出20项.
                break;
            }
        }
    
//        $scope.lastData = day1list + day2list + day3list+ day4list;
//        console.log($scope.lastData);
        
       
        
    }
    $scope.getWorkDay = function(){
        var dayList = angular.copy($scope.allDaysList);
//        console.log(dayList);
        var lastDayList = [];
        for(var i = 0 ; i < dayList.length;i++){
            var getday = new Date(dayList[i]).getDay();
//            console.log(getday)
            if (getday == 0 || getday == 6) {
                 dayList.splice(i,1);
            }else{
               lastDayList.push(dayList[i]); 
            }
        }
        $scope.getData(lastDayList)
    }
    $scope.getSurplusDays = function(){
        for(var i = 0;i< $scope.allDaysList.length;i++){
            for (var j = 0;j<$scope.daysList.length;j++){
                if($scope.allDaysList[i] == $scope.daysList[j]){
                    $scope.allDaysList.splice(i,1);
                }
            }
        }
        $scope.getWorkDay();
    }
    $scope.renderExtDays = function(){
        
        for(var i = 0;i<$scope.timeList.length;i++){
            var dateitem = $scope.timeList[i];
            var year = dateitem.getFullYear();
            var month = dateitem.getMonth().toString().length==1?"0"+dateitem.getMonth().toString():dateitem.getMonth();
            var day = dateitem.getDate().toString().length==1?"0"+dateitem.getDate():dateitem.getDate();
            $scope.daysList.push(year+"-"+month+"-"+day);
        }
        $scope.getSurplusDays();
        
    }
    $scope.getAllDays = function(){
        var startTime = angular.copy($scope.startDate);
        var endTime = angular.copy($scope.endDate);
        while((endTime.getTime()-startTime.getTime())>=0){
          var year = startTime.getFullYear();
          var month = (startTime.getMonth()+1).toString().length==1?"0"+(startTime.getMonth()+1).toString():startTime.getMonth()+1;
          var day = startTime.getDate().toString().length==1?"0"+startTime.getDate():startTime.getDate();
         startTime.setDate(startTime.getDate()+1);
            $scope.allDaysList.push(year+"-"+month+"-"+day)
           
        }
         $scope.renderExtDays();
        
    }
    $scope.ticketSubmit = function(){
        $scope.allDaysList = [];
        $scope.daysList = [];
        $scope.getAllDays();
    }
});
