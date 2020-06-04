/**2020.06.02
 * Codewars List Filtering Challenge
 * filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
 */

 const filter_list = (l) => {
     return l.filter(item => typeof(item) != 'string')
 }

 console.log(filter_list([1,2,'a', 'b']))

 console.log(filter_list([1,'a','b',0,15]))

 console.log(filter_list([1,2,'aasf','1','123',123]))