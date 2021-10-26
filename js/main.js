var array = [] ;

// Hàm thêm số vào mảng
function addNum() {
    var num = Number(document.querySelector("#inputNum").value) ; 
    array.push(num)
    document.querySelector("#txtAddNum").innerHTML = array 
}
// khi click vào button Thêm số
document.querySelector("#btnNum").onclick = addNum


// Hàm tính tổng số dương trong mảng
function totalNum() {
    var sum = 0 ;
    for(var i = 0; i < array.length ; i++) {
        if(array[i] > 0) {
            sum += array[i] ;
        }
    }
  document.querySelector("#txtResult").innerHTML = "Tổng số dương : " + sum ;
}

document.querySelector("#btnResult").onclick = totalNum ;

// Hàm đếm số dương trong mảng 
function countNum() {
    var count = 0 ;
    for(var i = 0 ; i < array.length ; i++) {
        if(array[i] > 0) {
            count++ 
        }
    }
    document.querySelector("#txtCount").innerHTML = "Số dương : " + count 
}

document.querySelector("#btnCount").onclick = countNum

// Hàm tìm số nhỏ nhất trong mảng 
function minNum() {
    min = array[0] ;
    for(var i = 1 ; i < array.length ; i++) {
        if(min > array[i]) {
            min = array[i]
        }
    }
    document.querySelector("#txtMin").innerHTML = "Số nhỏ nhất trong mảng là : " + min
}

document.querySelector("#btnMin").onclick = minNum

// Hàm tìm số dương nhỏ nhất 
function positiveNum() {
    var newArray = [] ;
    for(var i = 0 ; i < array.length ; i++) {
        if(array[i] > 0) {
            newArray.push(array[i])
        }
    }
    var minCount = newArray[0] ;
    if(newArray  == 0 ) {
        document.querySelector("#txtPosNum").innerHTML = "Không có số dương trong mảng"
    } else {
        for(var j = 1 ; j < newArray.length ; j++) {           
            if(minCount > newArray[j]) {
                minCount = newArray[j] ;
            }
        }
        document.querySelector("#txtPosNum").innerHTML = "Số dương nhỏ nhất là : " + minCount
    }    
}

document.querySelector("#btnPosNum").onclick = positiveNum

// Hàm tìm số chẵn cuối cùng 
function timSoChanCuoi(){
    for(var i = 0 ; i < array.length ; i++) {
        if(array[i] % 2 == 0) {
           var  soChanCuoi = array[i]
        }
    }
    document.querySelector("#txtMinEvenNum").innerHTML = "Số chẵn cuối cùng trong mảng là : " + soChanCuoi
}

document.querySelector("#btnMinEvenNum").onclick = timSoChanCuoi

// Hàm đổi vị trị index trong mảng 

function swapIndex() {
    var index1 = document.querySelector("#inputSwapNum1").value ; 
    var index2 = document.querySelector("#inputSwapNum2").value ; 
    var viTri = array[index1] ;
        array[index1] = array[index2] ;
        array[index2] = viTri ;  
    document.querySelector("#txtSwap").innerHTML = "Mảng sau khi đổi: " + array
}

document.querySelector("#btnSwap").onclick = swapIndex

// Hàm sắp xếp tăng dần trong mảng
function sapXepTangDan() {
    var newArr = [] ;
    for(var i = 0 ; i < array.length ; i++) {
        newArr.push(array[i])
    }
    for(var i = 0 ; i <newArr.length ; i++) {
        for(var j = 0 ; j < newArr.length - 1 ; j++) {
            if(newArr[j] > newArr[j+1]) {
                var x = newArr[j] ;
                newArr[j] = newArr[j+1] ;
                newArr[j+1] = x ;
            }
        }
    }
    document.querySelector("#txtUp").innerHTML = newArr
}

document.querySelector("#btnUp").onclick = sapXepTangDan

// Hàm tìm số nguyên tố đầu tiên     
function firstNum() {
    for(var i = 0 ; i< array.length; i++) {
        if(kiemTraSNT(array[i]) == true) {
        var content = array[i]
        break ;
        }  else {
            content = -1
        } 
    }
    console.log(content)
    document.querySelector("#txtFirstNum").innerHTML = content
}

// hàm kiểm tra số nguyên tố
function kiemTraSNT(n) {
    var flag = true ; 
    if(n < 2) {
        flag = false ; 
    } else if(n == 2 ) {
        flag = true ;
    } else if(n % 2 == 0) {
        flag = false ;
    } else {
        for(var i = 3 ; i <= Math.sqrt(n); i+=2) {
            if(n % i == 0) {
                flag = false ;
                break;           
            }
        }
    }
    return flag
}

document.querySelector("#btnFirstNum").onclick = firstNum

// Hàm đếm số nguyên 
function countPlus() {
    var a = 0 ;
    for(var i = 0 ; i < array.length ; i++) {
        if(Number.isInteger(array[i]) == true) {
           a++
        }
    }
    document.querySelector("#txtCountPlus").innerHTML = a 
}

document.querySelector("#btnCountPlus").onclick = countPlus

// Hàm so sánh số dương và số âm 
function minMax() {
    var soDuong = 0 ;
    var soAm = 0 ;
    for(var i = 0 ; i< array.length ; i++) {
        if(array[i] > 0) {
            soDuong++ ;
        } else if(array[i] < 0) {
            soAm++ ; 
        } 
    } 
    if(soDuong > soAm) {
        document.querySelector("#txtMinMax").innerHTML = "Số dương > Số âm "
    } else if(soDuong < soAm) {
        document.querySelector("#txtMinMax").innerHTML = "Số dương < Số âm "
    } else {
        document.querySelector("#txtMinMax").innerHTML = "Số dương = Số âm "
    }
}

document.querySelector("#btnMinMax").onclick = minMax