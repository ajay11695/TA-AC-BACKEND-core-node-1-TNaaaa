1.Explain globals ?
ans. 
 global are indentifire which are present in node.js ,some of the global are given below
 a. require
 b. timers
 c. process

2.Define fs module ?
ans.
  it is a file system module which keeps all the file related functionality inside it

3.Explain blocking and non-blocking codes with example ?
ans.
  blocking code:- which block the execution of the code until it is completed
   for ex:-
   ```js  
   console.log('hello')
 //    it is blocking is nature ,it will keep the execution blocked untill it is completed
  ```
  `non-blocking code:= which does not the execution of code
  `````
  setTimeout(()=>{
    console.log('hello')
  },1000)

  <!-- here it will not block the code because it is async in nature ,it will be executed once all the sync part is completed -->
  ````
  ````js
4.what is buffer ?
ans. 
  it is class which give a instance to store the raw data which corresponds to raw memory allocation outside the v8 heap,it stores the in hexadecimal formate