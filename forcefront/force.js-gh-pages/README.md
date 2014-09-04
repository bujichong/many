force.js
--------

**About this repo**

+ A simple AMD loader.
+ This project is released under the [MIT license](http://opensource.org/licenses/MIT).


**How to Use**

+ Define a module.

  ```js
  /**
   * @description Define a module that can be used later.
   * @param {String} moduleId Absolute path to the module file (without file name extension).
   * @param {Array} dependencies IDs of the dependent modules.
   * @param {Function} factory A factory function that would be executed after all modules are ready, and returns definition of the module.
   *                           Its parameter list must be coincident with the dependencies.
   */
  define('modules/module', ['dependencies/dependency'], function(dependency) {
    var module = {
      // Construct the module here, with the help of dependent modules.    
    };

    return module;
  }
  ```

+ Require dependency modules and do something.

  ```js
  /**
   * @description Require dependency modules and do something immediately.
   * @param {Array} dependencies IDs of the dependent modules.
   * @param {Function} factory A callback function that would be executed after all modules are ready.
   *                           Its parameter list must be coincident with the dependencies.
   */
  require(['dependencies/dependency'], function(dependency) {
    // do your job with the help of dependent modules.
  });
  ```

  
**Read the blog post**

+ http://forcefront.com/2014/farewell-2013/


**Try out the demos**

+ http://myst729.github.io/force.js/


**Donation**

+ If you think this project is helpful and would like to thank the author, please [show me the money](http://www.urbandictionary.com/define.php?term=show+me+the+money)!

[![I want a Macbook Pro!](https://img.alipay.com/sys/personalprod/style/mc/btn-index.png)](https://me.alipay.com/myst)
