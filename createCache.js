   function createCache() {
       var keys = [];//辅助的数组，用于记录顺序和长度
       //cache 是一个函数，函数也是对象
       //只提供了设置的方法
       //取值是以对象的形式进行取值的
       function cache(key, value) {
            //push 在数组最后面追加元素  返回新数组的长度
           if (keys.push(key) > 50) {
                //shift 删除数组第一个元素  返回这个元素
               delete cache[keys.shift()];
           }
           return (cache[key] = value); //函数结束，并且把键存储到cache中
       }
       return cache;
   }