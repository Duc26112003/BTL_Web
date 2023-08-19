
// khởi tạo hằng 
const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");
const checkbox3 = document.getElementById("checkbox3");
const checkbox4 = document.getElementById("checkbox4");

checkbox1.addEventListener("click", function() {
  if (checkbox1.checked) {
    checkbox2.checked = false;
  }
});

checkbox2.addEventListener("click", function() {
  if (checkbox2.checked) {
    checkbox1.checked = false;
  }
});

checkbox3.addEventListener("click", function() {
    if (checkbox3.checked) {
      checkbox4.checked = false;
    }
});
checkbox4.addEventListener("click", function() {
    if (checkbox4.checked) {
      checkbox3.checked = false;
    }
});

// function check() {
//     var name = document.getElementById('name').value;
//     if (name == '') {
//         alert("Vui lòng nhập họ tên của bạn ! ");
//         event.preventDefault();
//     }else {
//         var number = document.getElementById('number').value;
//         if (number == '') {
//             alert('Vui lòng nhập số điện thoại !');
//             event.preventDefault();
//         }
//     }

// } 
// check name 

function check() {
  var nameInput = document.getElementById("name");
  var nameError = document.getElementById("nameError");
  var numberInput = document.getElementById("number");
  var numberError = document.getElementById("numberError");
  var emailInput = document.getElementById("email");
  var emailError = document.getElementById("emailError");
  
  if (nameInput.value == "") {
  nameError.style.display = "block";
  nameInput.style.border = "1px solid red";
  nameInput.style.borderRadius = "5px";
  } else {
  nameError.style.display = "none";
  nameInput.style.border = "none";
  }
  
  if (numberInput.value == "") {
  numberError.style.display = "block";
  numberInput.style.border = "1px solid red";
  numberInput.style.borderRadius = "5px";
  } else {
  numberError.style.display = "none";
  numberInput.style.border = "none";
  }
  
  if (emailInput.value == "") {
  emailError.style.display = "block";
  emailInput.style.border = "1px solid red";
  emailInput.style.borderRadius = "5px";
  } else {
  emailError.style.display = "none";
  emailInput.style.border = "none";
  }
  
  event.preventDefault();
  }

//
const checkbox = document.getElementById("checkbox3");
const tinhthanhList = document.getElementById("tinhthanh-list");

checkbox.addEventListener("change", function() {
    if (this.checked) {
        tinhthanhList.style.display = "block";
    } else {
        tinhthanhList.style.display = "none";
    }
});
//

const Supermarket = document.getElementById("checkbox4");
const supermarketList = document.getElementById("supermarket-list");

Supermarket.addEventListener("change", function() {
    if (Supermarket.checked) {
        supermarketList.style.display = "block";
    } else {
        supermarketList.style.display = "none";
    }
});


const  Invoice = document.getElementById("checkbox5");
const InvoiceList = document.getElementById("list-invoice");

Invoice.addEventListener("change", function() {
    if ( Invoice.checked) {
        InvoiceList.style.display = "block";
    } else {
        InvoiceList.style.display = "none";
    }
});

const  thanhToan = document.getElementById("checkbox6");
const payMent = document.getElementById("payment");

thanhToan.addEventListener("change", function() {
    if ( thanhToan.checked) {
        payMent.style.display = "block";
    } else {
        payMent.style.display = "none";
    }
});

//////////////////////////////////////////////////////////////////
// Lấy phần tử HTML "tongtien" đầu tiên
var tongtien = document.querySelector('.tongtien');

// Lấy số lượng sản phẩm từ phần tử "number"
var number = parseInt(document.querySelector('.number').getAttribute('value'));

// Tính giá trị cho một sản phẩm
var price = 30390000;

// Tính tổng giá trị của các sản phẩm
var total = number * price;

// Định dạng giá trị mới
var formattedTotal = total.toLocaleString('vi-VN') + '₫';

// Cập nhật giá trị trong các phần tử "tongtien"
tongtien.textContent = formattedTotal;
var canThanhToan = document.querySelectorAll('.Can-thanh-toan .tongtien');
for (var i = 0; i < canThanhToan.length; i++) {
  canThanhToan[i].textContent = formattedTotal;
}

// Thêm sự kiện click cho nút trừ
var minusBtn = document.querySelector('.fa-minus');
minusBtn.addEventListener('click', function() {
  // Giảm số lượng nếu số lượng lớn hơn 1
  if (number > 1) {
    number -= 1;
    document.querySelector('.number').setAttribute('value', number);
    document.querySelector('.number').textContent = number;
    
    // Tính lại tổng giá trị và cập nhật trong các phần tử "tongtien"
    total = number * price;
    formattedTotal = total.toLocaleString('vi-VN') + '₫';
    tongtien.textContent = formattedTotal;
    for (var i = 0; i < canThanhToan.length; i++) {
      canThanhToan[i].textContent = formattedTotal;
    }
  }
});

// Thêm sự kiện click cho nút cộng
var plusBtn = document.querySelector('.fa-plus');
plusBtn.addEventListener('click', function() {
  // Tăng số lượng sản phẩm
  number += 1;
  document.querySelector('.number').setAttribute('value', number);
  document.querySelector('.number').textContent = number;

  // Tính lại tổng giá trị và cập nhật trong các phần tử "tongtien"
  total = number * price;
  formattedTotal = total.toLocaleString('vi-VN') + '₫';
  tongtien.textContent = formattedTotal;
  for (var i = 0; i < canThanhToan.length; i++) {
    canThanhToan[i].textContent = formattedTotal;
  }
});


  

