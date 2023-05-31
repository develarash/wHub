
const data="develarash@gmail.com"

var arr= []

for (var i = 0; i < data.length; i++) {
   
    if(data.charAt(i)==="@"){
        let text = arr.toString().replace(/,/g, '');
        console.log('this is',text)

    }
    arr.push(data.charAt(i));

    console.log(arr);
  }